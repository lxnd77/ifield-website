import { useEffect, useRef, useState } from 'react'

let Globe = () => null
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default

export default function GlobeSection() {
  const [mounted, setMounted] = useState(false)
  const globeEl = useRef()
  useEffect(() => {
    const globe = globeEl.current
    globe.controls().enableZoom = false
    globe.controls().enableDamping = true
    globe.controls().autoRotate = true
    globe.controls().dynamicDampingFactor = 0.01
    globe.controls().enablePan = false
    globe.controls().minDistance = 200
    globe.controls().maxDistance = 500
    globe.controls().rotateSpeed = 0.8
    globe.controls().zoomSpeed = 1
    globe.controls().minPolarAngle = Math.PI / 3.5
    globe.controls().maxPolarAngle = Math.PI - Math.PI / 3
  }, [])

  const markerSvg = `
    <svg viewBox="-4 0 36 36">
      <path fill="white" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
      <circle fill="#8D1B1C" cx="14" cy="14" r="7"></circle>
    </svg>`

  const chinaOffice = { lat: 23.128994, lng: 113.25325, location: 'china' }
  const chadOffice = { lat: 12.134846, lng: 15.055741, location: 'chad' }
  const indiaOffice = { lat: 26.912434, lng: 75.78727, location: 'india' }
  const usaOffice = { lat: 31.968599, lng: -99.90181, location: 'usa' }
  const nigeriaOffice = { lat: 9.081999, lng: 8.675277, location: 'nigeria' }
  const spainOffice = { lat: 40.463667, lng: -3.74922, location: 'spain' }

  const gData = [chinaOffice, chadOffice, indiaOffice, usaOffice, nigeriaOffice, spainOffice]

  function gHtmlElements(d) {
    const el = document.createElement('div')
    el.innerHTML = markerSvg
    el.style.color = 'black'
    el.style.width = `40px`
    el.className = `marker${d.location}`
    el.style['pointer-events'] = 'auto'
    el.style.cursor = 'pointer'
    el.onclick = () => {
      switch (d.location) {
        case 'china':
          console.log('china')
          break
        case 'chad':
          console.log('chad')
          break
        case 'india':
          console.log('india')
          break
        case 'usa':
          console.log('usa')
          break
        case 'nigeria':
          console.log('nigeria')
          break
        case 'spain':
          console.log('spain')
          break
        default:
          break
      }
    }
    return el
  }

  return (
    <div>
      <div className="mt-14 mb-6 flex items-center justify-center gap-2" data-scroll-section>
        <div className="playfair pl-[10%] text-6xl">Our Presence</div>
        <div className="h-1 w-64 bg-red-900"></div>
      </div>
      <div data-scroll-section>
        <div id="globeViz">
          <Globe
            ref={globeEl}
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            globeImageUrl="/assets/globe.png"
            htmlElementsData={gData}
            htmlElement={gHtmlElements}
          />
        </div>

        <div className="text-center">
          CHINA | HONGKONG (SAR) | INDIA | USA | UAE | NIGERIA | SPAIN
        </div>
      </div>
    </div>
  )
}
