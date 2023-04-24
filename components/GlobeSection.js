import { useState, useCallback, useRef, useEffect } from 'react'
import { SizeMe } from 'react-sizeme'
import GlobeModal from './GlobeModal'
// import dynamic from 'next/dynamic'

// const Globe = dynamic(import('react-globe.gl'), { ssr: false })
let Globe = () => null
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default
export default function GlobeSection() {
  const [modalData, setModalData] = useState(null)
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const chinaAddr = {
    title: 'Corporate Location',
    line1: '5th Fl, Building A, Daxin Industrial Park',
    line2: 'No.3 Kaifa Dong RD, Xishan Village, Luopu, Panyu District, Guangzhou',
    country: 'Peoples Republic of China',
    phone: '+86-20-39232167 / 39232577 / 39232657 ',
    email: 'info@ifield.com.cn',
    worktime1: 'Monday - Friday: 9:00 AM - 6:00 PM',
    worktime2: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
  }
  const indiaAddr = {
    title: 'Corporate Location',
    line1: 'E-201, Vaishali Nagar,',
    line2: 'Near Defence Public School, Jaipur, Rajasthan, ',
    country: 'India',
    phone: '+91-9887514715 ',
    email: 'info@ifield.ae',
    worktime1: 'Monday - Friday: 9:00 AM - 6:00 PM',
    worktime2: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
  }
  const spainAddr = {
    title: 'Corporate Location',
    line1: 'C/Forners i Pastissers 1907760',
    line2: 'Ciutadella de Menorca',
    country: 'Peoples Republic of China',
    phone: '+34-971 38 04 95 / 676815728',
    email: 'info@ifield.ae',
    worktime1: 'Monday - Friday: 9:00 AM - 6:00 PM',
    worktime2: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
  }
  const nigeriaAddr = {
    title: 'Corporate Location',
    line1: 'Block 13, Plot 2,',
    line2: 'Palace Road, VI, Lagos',
    country: 'Nigeria',
    phone: '+234-9037572893',
    email: 'info@ifield.com.cn',
    worktime1: 'Monday - Friday: 9:00 AM - 6:00 PM',
    worktime2: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
  }
  const uaeAddr = {
    title: 'Corporate Location',
    line1: 'Office 156, Floor1, European Business Centre Bldg,',
    line2: 'Dubai Investment Park . Jabel Ali, Dubai',
    country: 'United Arab Emirates',
    phone: ' +971-04-3540 227 / +971-50-1382847',
    email: ' info@ifield.ae',
    worktime1: 'Monday - Friday: 9:00 AM - 6:00 PM',
    worktime2: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
  }
  const usaAddr = {
    title: 'Corporate Location',
    line1: '5th Fl, Building A, Daxin Industrial Park',
    line2: ' No.3 Kaifa Dong RD, Xishan Village, Luopu, Panyu District, Guangzhou',
    country: 'Peoples Republic of China',
    phone: ' +86-20-39232167 / 39232577 / 39232657 ',
    email: ' info@ifield.com.cn',
    worktime1: 'Monday - Friday: 9:00 AM - 6:00 PM',
    worktime2: 'Saturday - Sunday: 9:00 AM - 12:00 PM',
  }

  const globeRef = useRef(null)

  // const init = () => {
  //   if (globeRef.current) {
  //     const globe = globeRef.current
  //     globe.current.controls().enableZoom = false
  //   }
  // }

  const onRefChange = useCallback((node) => {
    if (node === null) {
      // DOM node referenced by ref has been unmounted
    } else {
      // DOM node referenced by ref has changed and exists
      node.controls().enableZoom = false
      node.controls().enableDamping = true
      node.controls().autoRotate = true
      node.controls().dynamicDampingFactor = 0.05
      node.controls().enablePan = false

      node.controls().rotateSpeed = 0.04
      node.controls().minPolarAngle = Math.PI / 3.5
      node.controls().maxPolarAngle = Math.PI - Math.PI / 3
    }
  }, [])

  function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
  }
  const markerSvg = `
  <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2.94 4.85">
  <defs>
    <style>
      .cls-1 {
        fill: #8e1b1d;
      }
    </style>
  </defs>
  <g id="Layer_1-2" data-name="Layer 1">
    <path class="cls-1" d="M2.94,1.47c0-.81-.66-1.47-1.47-1.47S0,.66,0,1.47c0,.73,1.47,3.38,1.47,3.38,0,0,1.47-2.65,1.47-3.38Z"/>
  </g>
</svg>`

  const chinaOffice = { lat: 23.128994, lng: 113.25325, location: 'china' }
  const indiaOffice = { lat: 26.912434, lng: 75.78727, location: 'india' }
  const usaOffice = { lat: 31.968599, lng: -99.90181, location: 'usa' }
  const uaeOffice = { lat: 25.2048, lng: 55.2708, location: 'uae' }
  const nigeriaOffice = { lat: 9.081999, lng: 8.675277, location: 'nigeria' }
  const spainOffice = { lat: 40.463667, lng: -3.74922, location: 'spain' }

  const gData = [chinaOffice, indiaOffice, uaeOffice, usaOffice, nigeriaOffice, spainOffice]

  function gHtmlElements(d) {
    const el = document.createElement('div')
    el.innerHTML = markerSvg
    el.style.color = 'black'
    el.style.width = `20px`
    el.className = `marker${d.location}`
    el.style['pointer-events'] = 'auto'
    el.style.cursor = 'pointer'
    el.onclick = () => {
      switch (d.location) {
        case 'china':
          setModalData(chinaAddr)
          toggleModal()
          break
        case 'india':
          setModalData(indiaAddr)
          toggleModal()
          break
        case 'usa':
          setModalData(usaAddr)
          toggleModal()
          break
        case 'uae':
          setModalData(uaeAddr)
          toggleModal()
          break
        case 'nigeria':
          setModalData(nigeriaAddr)
          toggleModal()
          break
        case 'spain':
          setModalData(spainAddr)
          toggleModal()
          break
        default:
          break
      }
    }
    return el
  }

  return (
    <div data-scroll-section>
      <div className="h-[400px] w-fit">
        <div id="globeViz">
          {domLoaded && (
            <Globe
              ref={onRefChange}
              // bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              globeImageUrl="/assets/globe.png"
              htmlElementsData={gData}
              htmlElement={gHtmlElements}
              waitForGlobeReady={false}
              enablePointerInteraction={false}
              backgroundColor="rgba(255, 255, 255, 0.1)"
              height={400}
              width={400}
              // onGlobeReady={() => init()}
            />
          )}
        </div>
      </div>

      <div className="fixed top-0 left-0 z-10 hidden w-full overflow-y-auto" id="modal">
        <GlobeModal toggleModal={toggleModal} modalData={modalData} />
      </div>
    </div>
  )
}
