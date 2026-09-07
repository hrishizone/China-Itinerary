import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Overview from './components/Overview'
import RouteMap from './components/RouteMap'
import Itinerary from './components/Itinerary'
import Budget from './components/Budget'
import Food from './components/Food'
import Gallery from './components/Gallery'
import Essentials from './components/Essentials'
import Packing from './components/Packing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { prefetch } from './lib/imageResolver'
import { meta, cities, days, gallery, foodBucket } from './data/trip'

export default function App() {
  // One batched round trip resolves every photograph on the page.
  useEffect(() => {
    prefetch([
      meta.heroWiki,
      ...cities.map((c) => c.wiki),
      ...days.map((d) => d.wiki),
      ...gallery.map((g) => g.wiki),
      ...foodBucket.map((f) => f.wiki),
    ])
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Overview />
        <RouteMap />
        <Itinerary />
        <Budget />
        <Food />
        <Gallery />
        <Essentials />
        <Packing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
