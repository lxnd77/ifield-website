import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '@/css/styles.css'
import '@/css/floating-btn.css'
import '@fontsource/inter/variable-full.css'
import '@/css/vision.css'
import '@/css/timeline.css'
import '@/css/locomotive-scroll.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Head from 'next/head'
import Script from 'next/script'

import siteMetadata from '@/data/siteMetadata'
import { Analytics } from '@vercel/analytics/react'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

import { useEffect, useRef } from 'react'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])
  return (
    <>
      {/* <div data-scroll-container> */}

      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="referrer" content="no-referrer-when-downgrade"></meta>
      </Head>
      <Script id="tawk" strategy="lazyOnload">{`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/63ce3957c2f1ac1e202f16ba/1gneovvom';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
      `}</Script>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />

      <LayoutWrapper>
        <div>
          <Component {...pageProps} />
        </div>
      </LayoutWrapper>
      {/* </div> */}
    </>
  )
}
