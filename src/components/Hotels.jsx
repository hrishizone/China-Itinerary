import { motion } from 'framer-motion'
import { Star, MapPin, ExternalLink, BedDouble, TriangleAlert, CalendarClock } from 'lucide-react'
import SmartImage from './SmartImage'
import { Reveal, SectionHeading, inr } from './ui'
import { hotels, bookingPlan } from '../data/trip'

// Search links rather than deep links: property IDs rot, a search never does.
const bookingUrl = (name, city) =>
  `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(`${name}, ${city}, China`)}`
const mapsUrl = (name, city) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${city} China`)}`

function Option({ o, city, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex h-full flex-col rounded-xl border p-5 ${
        o.pick
          ? 'border-vermilion-500/45 bg-vermilion-500/[0.07]'
          : 'border-white/8 bg-white/[0.025]'
      }`}
    >
      {o.pick && (
        <span className="absolute -top-2.5 left-5 inline-flex items-center gap-1 rounded-full bg-vermilion-500 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white">
          <Star size={9} fill="currentColor" /> The plan&apos;s pick
        </span>
      )}

      <div className="mb-1 mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
        {o.kind}
      </div>
      <h4 className="font-display text-[17px] font-bold leading-snug text-white">{o.name}</h4>

      <div className="mt-2 flex items-baseline gap-2">
        <span className={`font-display text-2xl font-bold ${o.pick ? 'text-vermilion-200' : 'text-white'}`}>
          {inr(o.price)}
        </span>
        <span className="text-[12px] text-white/40">{o.priceNote}</span>
      </div>

      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-white/55">{o.why}</p>

      <div className="mt-4 flex gap-2">
        <a
          href={bookingUrl(o.name, city)}
          target="_blank"
          rel="noreferrer noopener"
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-[12px] font-semibold transition-transform duration-300 hover:scale-[1.03] ${
            o.pick ? 'bg-vermilion-500 text-white' : 'bg-white/10 text-white/80 hover:bg-white/16'
          }`}
        >
          Check rates <ExternalLink size={11} />
        </a>
        <a
          href={mapsUrl(o.name, city)}
          target="_blank"
          rel="noreferrer noopener"
          title="Open in Google Maps"
          className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-lg border border-white/10 text-white/50 transition-colors hover:border-white/25 hover:text-white"
        >
          <MapPin size={13} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Hotels() {
  return (
    <section id="stay" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Where you sleep"
        title={
          <>
            Five nights, <span className="gradient-text">three neighbourhoods</span>.
          </>
        }
        lead="Location matters more than thread count on a trip this tightly packed. Each of these three areas was chosen so that the day plan above works on foot and by metro — and the ₹13,300 accommodation line in the budget is the sum of the three picks."
      />

      <div className="space-y-8">
        {hotels.map((h, ci) => (
          <Reveal key={h.id} delay={ci * 0.06}>
            <div className="overflow-hidden rounded-2xl border border-white/8 bg-ink-900/60">
              <div className="grid lg:grid-cols-[300px_1fr]">
                {/* Neighbourhood */}
                <div className="relative">
                  <SmartImage wiki={h.wiki} alt={h.area} className="h-48 w-full lg:h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/45 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-4 left-5 right-5 lg:top-5">
                      <div className="hanzi text-[12px] tracking-[0.3em] text-white/45">{h.hanzi}</div>
                      <h3 className="heading text-2xl">{h.city}</h3>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-vermilion-300/80">
                        {h.nights}
                      </div>
                    </div>
                  </SmartImage>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                      <BedDouble size={12} /> Base yourself in
                    </div>
                    <div className="mt-1 font-display text-xl font-bold text-white">{h.area}</div>
                    <p className="mt-2 max-w-3xl text-[13.5px] leading-relaxed text-white/55">{h.why}</p>
                  </div>

                  <div className="mb-5 flex gap-2.5 rounded-lg border border-gold-400/25 bg-gold-400/[0.06] p-3.5">
                    <TriangleAlert size={14} className="mt-0.5 shrink-0 text-gold-300" />
                    <p className="text-[12.5px] leading-relaxed text-white/60">{h.avoid}</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {h.options.map((o, i) => (
                      <Option key={o.name} o={o} city={h.city} i={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 rounded-xl border border-white/8 bg-white/[0.02] p-5 text-[13px] leading-relaxed text-white/50">
          <strong className="text-white/75">Check these before you book.</strong> These are real,
          long-established properties in the right neighbourhoods, and the rates are indicative for a
          double room in shoulder season — but Chinese hotel pricing swings hard with the calendar, and
          some properties still refuse foreign passports. Confirm the live rate, and that the listing says
          it accepts foreign guests, on{' '}
          <a href="https://www.trip.com" target="_blank" rel="noreferrer noopener" className="text-white/80 underline decoration-white/25 underline-offset-4 hover:text-white">Trip.com</a>{' '}
          (much better Chinese inventory than the Western sites),{' '}
          <a href="https://www.booking.com" target="_blank" rel="noreferrer noopener" className="text-white/80 underline decoration-white/25 underline-offset-4 hover:text-white">Booking.com</a>{' '}
          or{' '}
          <a href="https://www.agoda.com" target="_blank" rel="noreferrer noopener" className="text-white/80 underline decoration-white/25 underline-offset-4 hover:text-white">Agoda</a>.
        </p>
      </Reveal>

      {/* ── Booking order ─────────────────────────────────── */}
      <div className="mt-20">
        <Reveal>
          <h3 className="heading mb-2 text-2xl sm:text-3xl">Book it in this order</h3>
          <p className="mb-8 max-w-2xl text-[15px] leading-relaxed text-white/50">
            Four of these have hard deadlines that people miss every day. Work down the list and the trip
            books itself.
          </p>
        </Reveal>

        <div className="relative">
          <span className="absolute bottom-6 left-[7px] top-2 w-px bg-gradient-to-b from-vermilion-500 to-vermilion-500/10 sm:left-[9px]" />
          {bookingPlan.map((b, i) => (
            <motion.div
              key={b.what}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative pb-6 pl-8 sm:pl-11"
            >
              <span
                className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 sm:h-[19px] sm:w-[19px] ${
                  b.critical
                    ? 'border-vermilion-500 bg-vermilion-500/25'
                    : 'border-white/25 bg-ink-950'
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-vermilion-300/85">
                  <CalendarClock size={11} /> {b.when}
                </span>
                <h4 className="font-display text-[17px] font-bold text-white">{b.what}</h4>
                {b.critical && (
                  <span className="rounded-full border border-vermilion-500/40 bg-vermilion-500/12 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-vermilion-200">
                    Hard deadline
                  </span>
                )}
              </div>
              <p className="mt-1.5 max-w-3xl text-[13.5px] leading-relaxed text-white/55">{b.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
