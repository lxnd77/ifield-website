import Footer from './Footer'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import imagesLoaded from 'imagesloaded'

import {
  LocomotiveScrollProvider as RLSProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll'

const LayoutWrapper = ({ children }) => {
  const [menuActive, SetMenuActive] = useState(false)

  const toggleMenu = () => {
    let ma = menuActive
    SetMenuActive(!ma)
  }

  const toggleOffMenu = (e) => {
    let ma = menuActive
    if (e.currentTarget)
      if (ma) {
        SetMenuActive(!ma)
      }
  }

  const router = useRouter()
  const containerRef = useRef(null)
  const { scroll } = useLocomotiveScroll()
  useEffect(() => {
    if (scroll) {
      imagesLoaded(containerRef.current, { background: true }, function () {
        scroll.update()
      })
    }

    const handleRouteChange = (url, { shallow }) => {
      SetMenuActive(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    window.addEventListener('click', function (e) {
      if (
        !document.getElementById('main-nav').contains(e.target) &&
        !document.getElementById('navbar-burger').contains(e.target)
      ) {
        if (menuActive) {
          SetMenuActive(false)
        }
      }
    })
  }, [router, menuActive, scroll])

  return (
    <div key={router.asPath}>
      {/* ------------------------------ Navbar -------------------------------- */}
      <div className="fixed top-0 z-[100] w-full bg-white md:static">
        <div className="mx-14 flex flex-row items-center justify-between py-4">
          <div className="hidden md:flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="mx-2 h-7 w-7">
              <path
                fill="black"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="mx-2 h-7 w-7">
              <path
                fill="black"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </div>
          <div>
            <div className="cursor-pointer place-self-center text-white">
              <Link href={'/'}>
                <Image width="100" height="100" alt="logo" src="/assets/logoblack.svg" />
              </Link>
            </div>
          </div>
          <div>
            <div className="text-black">
              {/* ------------------------- Menu Toggle button ---------------------------- */}
              <button
                className="navbar-burger z-60 group relative"
                id="navbar-burger"
                type="button"
                onClick={toggleMenu}
              >
                <div className="relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full bg-white ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
                  <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
                    <div
                      className={
                        menuActive
                          ? 'h-[2px] w-7 origin-left rotate-[42deg] transform bg-black transition-all duration-300'
                          : 'h-[2px] w-7 origin-left transform rounded bg-black transition-all duration-300'
                      }
                    ></div>
                    <div
                      className={
                        menuActive
                          ? 'h-[2px] w-1/2 -translate-x-10 transform rounded bg-black transition-all duration-300'
                          : 'h-[2px] w-1/2 transform rounded bg-black transition-all duration-300'
                      }
                    ></div>
                    <div
                      className={
                        menuActive
                          ? 'h-[2.5px] w-7 origin-left -rotate-[42deg] transform bg-black transition-all duration-300'
                          : 'h-[2.5px] w-7 origin-left transform rounded bg-black transition-all duration-300'
                      }
                    ></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------ Aside -------------------------------- */}
      <aside
        id="main-nav"
        className=" fixed	 top-[82px] right-0 z-[100] ml-auto h-[90vh] w-[400px] max-w-full 
                    overflow-hidden bg-white/90 text-black backdrop-blur transition-all duration-700"
        style={menuActive ? { right: 0 } : { right: -400 }}
      >
        <div className="h-full px-16 py-16">
          <div className="playfair flex h-full flex-col justify-around text-3xl">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About Us</Link>
            <Link href={'/process'}>Our Process</Link>
            <Link href={'/projects'}>Our Projects</Link>
            <Link href={'/contact'}>Contact Us</Link>
          </div>
        </div>
      </aside>
      <RLSProvider
        options={{
          smooth: true,
          smoothMobile: false,
          resetNativeScroll: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={[router.asPath]}
        location={router.asPath}
        onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
        // onLocationChange={(scroll) => {
        //   scroll.destroy()
        //   scroll.init()
        // }}
        containerRef={containerRef}
      >
        <main
          className="mt-[82px] h-full overflow-hidden bg-white md:mt-0 md:overflow-auto"
          onClick={toggleOffMenu}
        >
          <div ref={containerRef} className="w-full" data-scroll-container>
            {children}
            <Footer />
          </div>
        </main>
      </RLSProvider>
    </div>
  )
}

export default LayoutWrapper
