import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Footprints, TrainFront, Bus, Clock, Navigation, Route } from 'lucide-react'
import { Reveal, SectionHeading } from './ui'
import { beijingTrail, beijingContext } from '../data/trip'

// ── projection ───────────────────────────────────────────────
// Equirectangular, with the longitude axis scaled by cos(latitude) so that a
// kilometre north and a kilometre east are the same length on screen.
const KM_PER_DEG_LAT = 110.95
const kmPerDegLon = (lat) => 111.32 * Math.cos((lat * Math.PI) / 180)

/** Fit a set of lat/lon points into a square box, padded, in 0–100 space. */
function makeProjector(points, pad = 0.16) {
  const midLat = (Math.min(...points.map((p) => p.lat)) + Math.max(...points.map((p) => p.lat))) / 2
  const kLon = kmPerDegLon(midLat)

  // Work in kilometres so the aspect ratio is physically honest
  const xs = points.map((p) => p.lon * kLon)
  const ys = points.map((p) => p.lat * KM_PER_DEG_LAT)
  let [x0, x1] = [Math.min(...xs), Math.max(...xs)]
  let [y0, y1] = [Math.min(...ys), Math.max(...ys)]

  // Expand the shorter axis so the day fills a square frame without stretching
  const side = Math.max(x1 - x0, y1 - y0, 0.6) * (1 + pad * 2)
  const cx = (x0 + x1) / 2
  const cy = (y0 + y1) / 2
  x0 = cx - side / 2
  y0 = cy - side / 2

  const project = (lat, lon) => ({
    x: ((lon * kLon - x0) / side) * 100,
    y: 100 - ((lat * KM_PER_DEG_LAT - y0) / side) * 100, // north is up
  })
  return { project, sideKm: side }
}

const MODE = {
  walk: { icon: Footprints, label: 'on foot', dash: '0', width: 2.4 },
  metro: { icon: TrainFront, label: 'metro', dash: '5 4', width: 2 },
  bus: { icon: Bus, label: 'bus', dash: '9 5', width: 2 },
}

const KIND = {
  stay: { ring: '#ffffff', fill: '#15151f' },
  food: { ring: '#f7c35c', fill: '#2a1f0d' },
  sight: { ring: 'currentColor', fill: '#15151f' },
  night: { ring: '#7ee8c0', fill: '#0c2019' },
  transport: { ring: '#8891a5', fill: '#15151f' },
  optional: { ring: '#8891a5', fill: '#15151f' },
}

export default function BeijingTrail() {
  const [active, setActive] = useState(0)
  const [hover, setHover] = useState(null)
  const day = beijingTrail[active]

  const { project, sideKm } = useMemo(() => makeProjector(day.stops), [day])
  // A day that returns to where it started (the hotel, twice) would stack two
  // pins on the same pixel — nudge repeats so both stay clickable.
  const pts = (() => {
    const seen = new Map()
    return day.stops.map((s) => {
      const p = project(s.lat, s.lon)
      const key = `${p.x.toFixed(2)},${p.y.toFixed(2)}`
      const n = seen.get(key) || 0
      seen.set(key, n + 1)
      return { ...s, x: p.x + n * 2.6, y: p.y + n * 1.4 }
    })
  })()

  // Context geometry — the axis the city is built on, and the old wall line
  const axis = {
    a: project(beijingContext.centralAxis.latFrom, beijingContext.centralAxis.lon),
    b: project(beijingContext.centralAxis.latTo, beijingContext.centralAxis.lon),
  }
  const ring = (() => {
    const r = beijingContext.secondRing
    const tl = project(r.latMax, r.lonMin)
    const br = project(r.latMin, r.lonMax)
    return { x: tl.x, y: tl.y, w: br.x - tl.x, h: br.y - tl.y }
  })()

  // Scale bar: how wide is 1 km (or 10 km) in this day's frame?
  const barKm = sideKm > 40 ? 10 : sideKm > 8 ? 2 : 0.5
  const barPct = (barKm / sideKm) * 100

  const totalKm = day.legs.reduce((a, l) => a + l.km, 0)
  const totalMins = day.legs.reduce((a, l) => a + l.mins, 0)

  return (
    <section id="trail" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Beijing, day by day"
        title={
          <>
            How you actually <span className="gradient-text">move</span> through it.
          </>
        }
        lead="Beijing is built on a single north–south Central Axis with ring roads around it, and each of your three days has a completely different shape against that grid. These maps are drawn from real coordinates — the distances and the directions are true."
      />

      {/* Day switcher */}
      <Reveal>
        <div className="mb-6 flex flex-wrap gap-2">
          {beijingTrail.map((d, i) => (
            <button
              key={d.n}
              onClick={() => { setActive(i); setHover(null) }}
              className={`relative rounded-xl px-4 py-2.5 text-left transition-colors ${
                i === active ? 'text-white' : 'text-white/45 hover:text-white/80'
              }`}
            >
              {i === active && (
                <motion.span
                  layoutId="trail-pill"
                  className="absolute inset-0 -z-10 rounded-xl border"
                  style={{ background: `${d.color}1f`, borderColor: `${d.color}66` }}
                  transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                />
              )}
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
                {d.label}
              </span>
              <span className="block whitespace-nowrap text-[13px] font-semibold">{d.name}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* ── The map ─────────────────────────────────────── */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-ink-900 to-ink-950 p-3 sm:p-4">
            <div className="relative aspect-square w-full" style={{ color: day.color }}>
              <div
                className="absolute inset-0 opacity-[0.13]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)',
                  backgroundSize: '11.111% 11.111%',
                }}
              />

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full overflow-visible"
              >
                {/* 2nd Ring Road — the line of the old city wall */}
                <rect
                  x={ring.x} y={ring.y} width={ring.w} height={ring.h}
                  rx="1.4" fill="none" stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1.4" strokeDasharray="2 2" vectorEffect="non-scaling-stroke"
                />
                {/* Central Axis */}
                <line
                  x1={axis.a.x} y1={axis.a.y} x2={axis.b.x} y2={axis.b.y}
                  stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="1 3"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Route legs */}
                {day.legs.map((leg, i) => {
                  const a = pts[i]
                  const b = pts[i + 1]
                  if (!a || !b) return null
                  const m = MODE[leg.mode]
                  return (
                    <motion.line
                      key={`${day.n}-${i}`}
                      x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                      stroke={day.color}
                      strokeWidth={m.width}
                      strokeDasharray={m.dash === '0' ? undefined : m.dash}
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: hover == null || hover === i || hover === i + 1 ? 0.95 : 0.28,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.14 }}
                    />
                  )
                })}
              </svg>

              {/* Pins + labels, in HTML so the type stays crisp and unstretched */}
              {pts.map((s, i) => {
                const k = KIND[s.kind] || KIND.sight
                const on = hover === i
                const right = s.x < 24 ? true : s.x > 76 ? false : s.side === 'right'
                return (
                  <motion.div
                    key={`${day.n}-${s.name}-${i}`}
                    className="absolute z-10"
                    style={{ left: `${s.x}%`, top: `${s.y}%` }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.3 + i * 0.16 }}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2">
                      <span
                        className={`grid h-[22px] w-[22px] cursor-default place-items-center rounded-full border-2 font-mono text-[10px] font-bold transition-transform duration-300 ${
                          on ? 'scale-125' : ''
                        } ${s.kind === 'optional' ? 'border-dashed' : ''}`}
                        style={{
                          borderColor: k.ring === 'currentColor' ? day.color : k.ring,
                          background: k.fill,
                          color: k.ring === 'currentColor' ? day.color : k.ring,
                        }}
                      >
                        {i + 1}
                      </span>
                      <div
                        className={`pointer-events-none absolute top-1/2 w-[136px] -translate-y-1/2 rounded px-1.5 py-0.5 ${
                          right ? 'left-[24px] text-left' : 'right-[24px] text-right'
                        }`}
                        style={{ background: 'rgba(11,11,18,0.72)' }}
                      >
                        <div
                          className={`text-[11px] font-semibold leading-tight transition-colors ${
                            on ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          {s.name}
                        </div>
                        <div className="font-mono text-[9px] leading-tight text-white/35">
                          {s.time} · {s.note}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* North arrow + scale bar */}
              <div className="pointer-events-none absolute right-2 top-2 flex flex-col items-center text-white/35">
                <Navigation size={13} />
                <span className="font-mono text-[9px]">N</span>
              </div>
              <div className="pointer-events-none absolute bottom-2 left-2 text-white/35">
                <div
                  className="h-[5px] border-x border-b border-white/35"
                  style={{ width: `${barPct}%`, minWidth: 18 }}
                />
                <span className="font-mono text-[9px]">{barKm} km</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-white/8 pt-3 font-mono text-[10px] text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="h-[2px] w-5" style={{ background: day.color }} /> on foot
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-0 w-5 border-t-2 border-dashed" style={{ borderColor: day.color }} /> metro / bus
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-sm border border-dashed border-white/30" /> 2nd Ring
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-0 border-l border-dotted border-white/40" /> Central Axis
              </span>
            </div>
          </div>
        </Reveal>

        {/* ── The legs ────────────────────────────────────── */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={day.n}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <div
                className="mb-4 rounded-xl border-l-[3px] bg-white/[0.035] p-5"
                style={{ borderColor: day.color }}
              >
                <p className="text-[14px] leading-relaxed text-white/70">{day.summary}</p>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/8">
                {[
                  { label: 'On foot', value: `${day.walkKm} km` },
                  { label: 'Ground covered', value: `${totalKm.toFixed(1)} km` },
                  { label: 'In transit', value: `${Math.floor(totalMins / 60)}h ${totalMins % 60}m` },
                ].map((m) => (
                  <div key={m.label} className="bg-ink-900 p-3.5">
                    <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                      {m.label}
                    </div>
                    <div className="mt-1 font-display text-lg font-bold text-white">{m.value}</div>
                  </div>
                ))}
              </div>

              <ol className="space-y-0">
                {day.stops.map((s, i) => {
                  const leg = day.legs[i]
                  const M = leg ? MODE[leg.mode] : null
                  return (
                    <li key={s.name + i}>
                      <div
                        onMouseEnter={() => setHover(i)}
                        onMouseLeave={() => setHover(null)}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                          hover === i ? 'bg-white/[0.06]' : ''
                        }`}
                      >
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 font-mono text-[10px] font-bold ${
                            s.kind === 'optional' ? 'border-dashed' : ''
                          }`}
                          style={{ borderColor: day.color, color: day.color }}
                        >
                          {i + 1}
                        </span>
                        <span className="font-mono text-[11px] text-white/40">{s.time}</span>
                        <span className="flex-1 text-[14px] font-semibold text-white">
                          {s.name}
                          {s.kind === 'optional' && (
                            <span className="ml-2 font-mono text-[9px] uppercase tracking-wider text-white/35">
                              optional
                            </span>
                          )}
                        </span>
                        <span className="hanzi shrink-0 text-[12px] text-white/25">{s.zh}</span>
                      </div>
                      {leg && (
                        <div className="flex items-center gap-2.5 py-1 pl-[1.45rem] text-white/35">
                          <span
                            className="h-6 w-px shrink-0"
                            style={{ background: `${day.color}66` }}
                          />
                          <M.icon size={11} />
                          <span className="font-mono text-[10.5px]">
                            {leg.mins} min · {leg.km} km
                          </span>
                          <span className="truncate text-[11px] text-white/30">{leg.via}</span>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ol>

              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] p-4 text-[12.5px] leading-relaxed text-white/45">
                <Route size={14} className="mt-0.5 shrink-0 text-white/30" />
                <span>
                  Positions are projected from real coordinates, so bearings and relative distances
                  are accurate — but each day is fitted to its own frame, so check the scale bar
                  before comparing one map to another. Day 3 covers 70 km; Day 1 covers four.
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
