import { useState, useCallback, useRef, useEffect } from 'react'
import { SizeMe } from 'react-sizeme'
import GlobeModal from './GlobeModal'
// import dynamic from 'next/dynamic'

// const Globe = dynamic(import('react-globe.gl'), { ssr: false })
let Globe = () => null
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default
export default function GlobeSection() {
  const [mounted, setMounted] = useState(false)
  const [modalData, setModalData] = useState('nothing')
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const chinaAddr = {
    title: 'Corporate Location',
    line1: '5th Fl, Building A, Daxin Industrial Park',
    line2: ' No.3 Kaifa Dong RD , Xishan Village , Luopu , Panyu District , Guangzhou ,',
    country: 'Peoples Republic of China',
    phone: ' +86-20-39232167 / 39232577 / 39232657 ',
    email: ' info@ifield.com.cn',
    worktime1: ' Monday - Friday: 9:00 AM - 6:00 PM',
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
      node.controls().dynamicDampingFactor = 0.01
      node.controls().enablePan = false
      node.controls().minDistance = 200
      node.controls().maxDistance = 500
      node.controls().rotateSpeed = 0.3
      node.controls().zoomSpeed = 1
      node.controls().minPolarAngle = Math.PI / 3.5
      node.controls().maxPolarAngle = Math.PI - Math.PI / 3
    }
  }, [])

  function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
  }
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
          toggleModal()
          setModalData(`Corporate Location
          5th Fl, Building A, Daxin Industrial Park
          No.3 Kaifa Dong RD , Xishan Village , Luopu , Panyu District , Guangzhou ,
          Peoples Republic of China
          +86-20-39232167 / 39232577 / 39232657
          info@ifield.com.cn
          Monday - Friday: 9:00 AM - 6:00 PM
          Saturday - Sunday: 9:00 AM - 12:00 PM`)
          break
        case 'chad':
          console.log('chad')
          toggleModal()
          setModalData(`Corporate Location
          5th Fl, Building A, Daxin Industrial Park
          No.3 Kaifa Dong RD , Xishan Village , Luopu , Panyu District , Guangzhou ,
          Peoples Republic of China
          +86-20-39232167 / 39232577 / 39232657
          info@ifield.com.cn
          Monday - Friday: 9:00 AM - 6:00 PM
          Saturday - Sunday: 9:00 AM - 12:00 PM`)
          break
        case 'india':
          console.log('india')
          toggleModal()
          setModalData(`Corporate Location
          5th Fl, Building A, Daxin Industrial Park
          No.3 Kaifa Dong RD , Xishan Village , Luopu , Panyu District , Guangzhou ,
          Peoples Republic of China
          +86-20-39232167 / 39232577 / 39232657
          info@ifield.com.cn
          Monday - Friday: 9:00 AM - 6:00 PM
          Saturday - Sunday: 9:00 AM - 12:00 PM`)
          break
        case 'usa':
          console.log('usa')
          toggleModal()
          setModalData(`Corporate Location
          5th Fl, Building A, Daxin Industrial Park
          No.3 Kaifa Dong RD , Xishan Village , Luopu , Panyu District , Guangzhou ,
          Peoples Republic of China
          +86-20-39232167 / 39232577 / 39232657
          info@ifield.com.cn
          Monday - Friday: 9:00 AM - 6:00 PM
          Saturday - Sunday: 9:00 AM - 12:00 PM`)
          break
        case 'nigeria':
          console.log('nigeria')
          toggleModal()
          setModalData(`Corporate Location
          5th Fl, Building A, Daxin Industrial Park
          No.3 Kaifa Dong RD , Xishan Village , Luopu , Panyu District , Guangzhou ,
          Peoples Republic of China
          +86-20-39232167 / 39232577 / 39232657
          info@ifield.com.cn
          Monday - Friday: 9:00 AM - 6:00 PM
          Saturday - Sunday: 9:00 AM - 12:00 PM`)
          break
        case 'spain':
          console.log('spain')
          toggleModal()
          setModalData(`Corporate Location
          5th Fl, Building A, Daxin Industrial Park
          No.3 Kaifa Dong RD , Xishan Village , Luopu , Panyu District , Guangzhou ,
          Peoples Republic of China
          +86-20-39232167 / 39232577 / 39232657
          info@ifield.com.cn
          Monday - Friday: 9:00 AM - 6:00 PM
          Saturday - Sunday: 9:00 AM - 12:00 PM`)
          break
        default:
          break
      }
    }
    return el
  }

  return (
    <div data-scroll-section>
      <div className="mt-14 mb-6 flex items-center justify-center gap-2">
        <div className="playfair pl-[10%] text-[2.4rem] md:text-[4vw]">Our Presence</div>
        <div className="h-1 w-64 bg-red-900"></div>
      </div>
      <div>
        <div id="globeViz">
          {domLoaded && (
            <Globe
              ref={onRefChange}
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              globeImageUrl="/assets/globe.png"
              htmlElementsData={gData}
              htmlElement={gHtmlElements}
              // onGlobeReady={() => init()}
            />
          )}
        </div>

        <div className="text-center">
          CHINA | HONGKONG (SAR) | INDIA | USA | UAE | NIGERIA | SPAIN
        </div>
      </div>

      <div className="fixed top-0 left-0 z-10 hidden w-full overflow-y-auto" id="modal">
        <GlobeModal toggleModal={toggleModal} modalData={modalData} />
      </div>
    </div>
  )
}
