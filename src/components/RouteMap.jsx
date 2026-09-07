import { motion } from 'framer-motion'
import { Plane, TrainFront, Moon, Clock, Wallet } from 'lucide-react'
import { Reveal, SectionHeading, inr } from './ui'

// Positions are schematic but geographically faithful in their relationships:
// Mumbai to the south-west, Beijing north-east, Xi'an central, Shanghai on the coast.
const NODES = [
  { id: 'mumbai', name: 'Mumbai', hanzi: '孟买', x: 8, y: 78, color: '#ffffff', note: 'CSMIA T2' },
  { id: 'beijing', name: 'Beijing', hanzi: '北京', x: 70, y: 24, color: '#f8451a', note: 'Days 1–3' },
  { id: 'xian', name: "Xi'an", hanzi: '西安', x: 57, y: 48, color: '#e0a33a', note: 'Days 4–5' },
  { id: 'shanghai', name: 'Shanghai', hanzi: '上海', x: 82, y: 58, color: '#12b886', note: 'Days 5–7' },
]

const LEGS = [
  {
    from: 'Mumbai', to: 'Beijing', mode: 'flight', icon: Plane,
    detail: 'One stop — Hong Kong, Bangkok or Kuala Lumpur', time: '12h 25m', cost: 19000, day: 'Day 1',
    note: 'There is no non-stop. Take the overnight departure and book it as one ticket, so a missed connection is the airline\u2019s problem rather than yours.',
  },
  {
    from: 'Beijing', to: "Xi'an", mode: 'sleeper', icon: Moon,
    detail: 'Z19 overnight soft sleeper', time: '11h 53m', cost: 3660, day: 'Night of Day 3',
    note: 'Saves a hotel night AND a travel day. Four berths, a door that locks, lights out at 22:00.',
  },
  {
    from: "Xi'an", to: 'Shanghai', mode: 'bullet', icon: TrainFront,
    detail: 'G-series high-speed, 350 km/h', time: '6h 02m', cost: 6080, day: 'Day 5',
    note: '1,400 km across the country while you eat a ¥45 lunchbox and watch the loess turn into delta.',
  },
  {
    from: 'Shanghai', to: 'Mumbai', mode: 'flight', icon: Plane,
    detail: 'Pudong PVG → CSMIA, one stop', time: '10h 15m', cost: 19000, day: 'Day 7',
    note: 'Get there via the 431 km/h Maglev — 30 km in 7 minutes 20 seconds.',
  },
]

/** Gentle arc between two points, bowing away from the straight line. */
function arc(a, b, bow = 14) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy) || 1
  const cx = mx + (-dy / len) * bow
  const cy = my + (dx / len) * bow
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`
}

const N = Object.fromEntries(NODES.map((n) => [n.id, n]))

const PATHS = [
  { d: arc(N.mumbai, N.beijing, 12), color: '#ffffff', dash: '3 3', delay: 0 },
  { d: arc(N.beijing, N.xian, -7), color: '#e0a33a', dash: '0', delay: 0.9 },
  { d: arc(N.xian, N.shanghai, -6), color: '#12b886', dash: '0', delay: 1.6 },
  { d: arc(N.shanghai, N.mumbai, 16), color: '#ffffff', dash: '3 3', delay: 2.3 },
]

export default function RouteMap() {
  return (
    <section id="route" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="The route"
        title={
          <>
            One loop, <span className="gradient-text">two nights in motion</span>.
          </>
        }
        lead="Nothing about this route backtracks. You fly into the north, work your way south-east by rail, and fly home from the coast — and both intercity legs are timed so they cost you sleep, not sightseeing."
      />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        {/* ── Schematic map ─────────────────────────────────── */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-ink-900 to-ink-850 p-4 sm:p-6">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />
            <svg viewBox="0 0 100 88" className="relative w-full" style={{ aspectRatio: '100/88' }}>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.4" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {PATHS.map((p, i) => (
                <motion.path
                  key={i}
                  d={p.d}
                  fill="none"
                  stroke={p.color}
                  strokeWidth={i % 3 === 0 ? 0.5 : 0.75}
                  strokeDasharray={p.dash === '0' ? undefined : p.dash}
                  strokeLinecap="round"
                  opacity={p.dash === '0' ? 0.85 : undefined}
                  filter={p.color === '#ffffff' ? undefined : 'url(#glow)'}
                  {...(p.dash === '0'
                    ? {
                        initial: { pathLength: 0 },
                        whileInView: { pathLength: 1 },
                        transition: { duration: 1.5, delay: p.delay, ease: 'easeInOut' },
                      }
                    : {
                        // pathLength would override the dash pattern, so fade these in
                        initial: { opacity: 0 },
                        whileInView: { opacity: 0.4 },
                        transition: { duration: 1.1, delay: p.delay },
                      })}
                  viewport={{ once: true, margin: '-60px' }}
                />
              ))}

              {/* Travelling pulse along the rail legs */}
              {PATHS.filter((p) => p.dash === '0').map((p, i) => (
                <circle key={`pulse-${i}`} r="0.9" fill={p.color}>
                  <animateMotion dur="4.5s" repeatCount="indefinite" path={p.d} begin={`${i * 1.6}s`} />
                </circle>
              ))}

              {NODES.map((n, i) => (
                <g key={n.id}>
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="4.5"
                    fill={n.color}
                    opacity="0.14"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.35, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.5 + i * 0.35 }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r="1.7"
                    fill={n.color}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.5 + i * 0.35 }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                  <motion.text
                    x={n.x}
                    y={n.y - 6.2}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="3.6"
                    fontWeight="700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.35 }}
                  >
                    {n.name}
                  </motion.text>
                  <motion.text
                    x={n.x}
                    y={n.y + 8.4}
                    textAnchor="middle"
                    fill={n.color}
                    fontSize="2.5"
                    opacity="0.75"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.75 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.95 + i * 0.35 }}
                  >
                    {n.note}
                  </motion.text>
                </g>
              ))}
            </svg>

            <div className="relative mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/8 pt-4 text-[11px] text-white/45">
              <span className="flex items-center gap-1.5">
                <span className="h-px w-5 border-t border-dashed border-white/50" /> Flight
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-px w-5 bg-gold-400" /> Overnight sleeper
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-px w-5 bg-jade-500" /> High-speed rail
              </span>
              <span className="ml-auto font-mono text-white/30">Schematic — not to scale</span>
            </div>
          </div>
        </Reveal>

        {/* ── Leg breakdown ─────────────────────────────────── */}
        <div className="space-y-3">
          {LEGS.map((l, i) => (
            <Reveal key={i} delay={i * 0.09}>
              <div className="card-hover group rounded-xl border border-white/8 bg-ink-900/70 p-5">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:border-vermilion-500/40 group-hover:text-vermilion-300">
                    <l.icon size={17} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-display text-lg font-bold text-white">
                        {l.from} <span className="text-white/25">→</span> {l.to}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                        {l.day}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[13px] text-white/45">{l.detail}</p>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-white/60">{l.note}</p>
                    <div className="mt-3.5 flex flex-wrap items-center gap-4 text-[12px]">
                      <span className="flex items-center gap-1.5 text-white/50">
                        <Clock size={12} /> {l.time}
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-gold-300">
                        <Wallet size={12} /> {inr(l.cost)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="rounded-xl border border-vermilion-500/25 bg-vermilion-500/8 p-5 text-[13px] leading-relaxed text-white/65">
              <strong className="text-white">Total getting-around cost: {inr(47740)}</strong> — that is both
              international flights and both intercity rail legs. Nearly half your entire budget is spent
              simply moving, which is exactly why the route refuses to double back.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
