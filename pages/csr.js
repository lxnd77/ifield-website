import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import TimelineSection from 'components/TimelineSection'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function CSR() {
  return (
    <>
      <PageSEO title={`About Us - ${siteMetadata.title}`} description={siteMetadata.description} />
      <div className="container mx-auto w-[90vw] overflow-hidden">
        <div className="md:grid md:grid-cols-2" id="ex1" data-scroll-section>
          <div className="container mr-auto md:col-span-1 md:col-start-1">
            <h1 className="playfair text-[2.4rem] leading-normal md:mt-4 md:text-[4vw]">
              Corporate Social Responsibility (CSR)
            </h1>
            <br />
            <p className="text-xl">
              At I-Field, Corporate Social Responsibility (CSR) is more than a policy; it is a
              fundamental part of our identity. CSR encompasses our commitment to operate in ways
              that enhance society and the environment. We have started Arpan Foundation, A
              non-profit organization dedicated to empowering women and impoverished children
              through skill development, supporting the infrastructure of existing NGOs, and raising
              awareness and preventing child abuse.
            </p>
          </div>
          <div className="container mt-12 mr-auto md:col-span-1 md:col-start-2">
            <Image
              height={400}
              width={400}
              alt=""
              src="/assets/ArpanLogo.png"
              className="my-auto mx-auto px-4 py-4"
            />
          </div>
          <div className="md: container col-start-1 mr-auto md:col-span-2">
            <h1 className="playfair text-[2.4rem] leading-normal md:mt-4 md:text-[4vw]">
              Mission and Vision
            </h1>
            <br />
            <p className="text-xl">
              Our mission is to foster social equity and sustainable development. We envision being
              a global leader not just in interior design and execution but also in community
              engagement and social responsibility. empower marginalized communities of women,
              children, and individuals with special needs by ensuring their needs are met,
              enhancing their quality of life, and providing equal opportunities for them to thrive
              and lead fulfilling lives.
            </p>
            <br />
          </div>
          <div className="container mr-auto md:col-span-1 md:col-start-1">
            <h1 className="playfair text-[2.4rem] leading-normal md:mt-4 md:text-[4vw]">
              Our CSR Activities
            </h1>
            <br />
            <p className="text-xl md:col-span-1 md:col-start-1">
              We collaborate with grassroots efforts in Ajmer, enhancing local development projects
              and community-driven initiatives. One of our notable projects includes building
              state-of-the-art computer labs in 2 schools in Ajmer, providing female students and
              special needs children with essential access to modern technology. <br />
              <br />
              We are currently working on creating infrastucture for NGOs in Rajasthan, We have a
              fully equipped kitchen and bathroom facilities in the pipeline, with more to be added
              soon.
              <br /> <br />
              Contact us at:{' '}
              <a className="text-blue-700" href="mailto:info@arpan-foundation.com">
                info@arpan-foundation.com
              </a>{' '}
              /{' '}
              <a className="text-blue-700" href="tel:+919571168864">
                +91 95711 68864
              </a>
            </p>
          </div>
          <div classname="container mr-auto md:col-span-1 md:col-start-1">
            <Image
              width={500}
              height={500}
              alt=""
              src="/assets/Arpan2.webp"
              className="my-auto mx-auto px-4 py-4"
            />
            <Image
              width={500}
              height={500}
              alt=""
              src="/assets/arpan1.webp"
              className="my-auto mx-auto px-4 py-4"
            />
          </div>
        </div>
      </div>
    </>
  )
}
