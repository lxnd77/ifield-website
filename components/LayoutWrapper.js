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
      <div className="fixed top-0 z-[99999] w-full  bg-white/90 ">
        <div className="mx-14 flex flex-row items-center justify-between py-4">
          <div>
            <div className="">
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
                          ? 'h-[2px] w-7 -translate-x-10 transform rounded bg-black transition-all duration-300'
                          : 'h-[2px] w-7 transform rounded bg-black transition-all duration-300'
                      }
                    ></div>
                    <div
                      className={
                        menuActive
                          ? 'h-[2px] w-7 origin-left -rotate-[42deg] transform bg-black transition-all duration-300'
                          : 'h-[2px] w-7 origin-left transform rounded bg-black transition-all duration-300'
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
        className=" fixed	 top-[82px] right-0 z-[100] ml-auto h-[80vh] w-[400px] max-w-full 
                    overflow-hidden bg-white/90 text-black backdrop-blur transition-all duration-700"
        style={menuActive ? { right: 0 } : { right: -400 }}
      >
        <div className="h-full px-16 py-16">
          <div className="playfair flex h-full flex-col justify-start space-y-10 text-3xl">
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About Us</Link>
            <Link href={'/process'}>Our Process</Link>
            <Link href={'/projects'}>Our Projects</Link>
            <Link href={'/csr'}>CSR</Link>
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
          className=" mt-20 h-full overflow-hidden bg-white md:overflow-auto"
          onClick={toggleOffMenu}
          W
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
