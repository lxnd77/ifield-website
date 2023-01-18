import GlobeSection from '@/components/GlobeSection'
import Vision from '@/components/Vision'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import CountUp from 'react-countup'

export default function Home({ toggleContact }) {
  return (
    <>
      {/* ------------------------------------ HERO ----------------------------- */}
      <div
        className="relative h-[90vh] 
        w-full"
        // onMouseMove={mouse_position}
        data-scroll-section
      >
        <Image
          className="hImg pointer-events-none absolute right-[20%] top-[15%] w-[400px] shadow-xl"
          src="/assets/Rectangle 45.png"
          alt=""
          id="i2"
          // ref={i2}
          width={400}
          height={400}
        />
        <Image
          className="hImg pointer-events-none absolute right-[10%] bottom-[10%] w-[300px] shadow-xl"
          src="/assets/Rectangle 50.png"
          alt=""
          id="i1"
          // ref={i1}
          width={400}
          height={400}
        />

        <div className=" playfair pointer-events-none z-50 m-10 my-auto text-left text-[2.6rem] leading-tight text-black md:text-[5vw]">
          <h1>
            FF&E Manufacturing <br />
            Turnkey Solutions
          </h1>
        </div>
        <div className=" z-50 m-10 w-fit cursor-pointer">
          <button className="btn " onClick={toggleContact.toggleContact}>
            Get in touch
          </button>
        </div>
      </div>

      {/* <!------------------------------ The I-Field Advantage --------------------------------------> */}

      <div className="relative" data-scroll-section>
        {/*<!-------------------Mobile title------------------->*/}
        <div className="flex bg-black align-middle md:hidden">
          <div className="playfair mb-8 py-6 pl-[10%] font-serif text-[2.4rem] text-white md:text-[4vw] ">
            Our Distinction
          </div>
          <div className="my-auto h-1 w-full bg-red-900"></div>
        </div>

        <div className="flex w-full flex-col bg-black md:w-[90vw]  md:flex-row md:pt-[10%] lg:pt-8">
          <Image
            className="relative h-[100vh] w-[100vw] object-cover md:top-[12vh] md:w-[50vw]"
            src="/assets/7.jpg"
            alt="hotel lobby"
            width={500}
            height={1000}
          />
          <div className="mx-14  mt-[20%] w-[80%] items-center text-xl text-white">
            <div className="align-items-center absolute top-[10vw] right-[6vw] hidden w-[50%] align-middle md:flex">
              <div className="playfair mb-4 font-serif text-[4vw] leading-snug text-white ">
                Our Distinction
              </div>
              <div className="my-auto h-1 w-[28%] bg-red-900"></div>
            </div>
            <div className=" bg-black text-[16px]">
              <div>
                We are a team of industry experts offering deluxe turnkey solutions for FF&E
                manufacture, supply, and installation. Established and operated by hotel owners and
                industry experts, our end-to-end services ensure high client satisfaction around the
                globe.
              </div>
              <div className="mt-8 text-xl">
                Our core principle is to provide the best in products, prices, efficiency, and
                customer service, and that’s the I-Field advantage.
              </div>
              <button className="mt-8 mb-8 h-12 w-48 bg-yellow-400 text-center text-black">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-[120px]">{/* <GlobeSection /> */}</div>
      {/*<!---------------------------- Process ------------------------------------>*/}

      {/* <!------------------------------------------- Impact -------------------------------------> */}
      <div className="static min-h-[100vh] w-[100%] overflow-hidden bg-white" data-scroll-section>
        <div className="relative mx-auto mt-20 min-h-[55vh] w-[100vw] bg-black md:w-[70%]">
          <div className="mt-[140px] mb-2 flex items-center  py-[24px]">
            <div className="h-1 w-[20%] bg-red-900 "></div>
            <div className="playfair pl-[1%] text-[2.4rem] text-white md:text-[4vw]">
              Our Process
            </div>
          </div>
          {/* <div className=" top-16 left-10 h-1 w-[35%] bg-red-900"></div>
          <div className="playfair  top-10 left-[40%] text-[2.4rem] text-white md:text-[4vw]">
            Our Impact
          </div> */}
          <div className=" top-[35%] left-[25%] mx-auto my-auto w-[50%] text-xl text-white">
            I-Field is equipped with expert teams and world-class infrastructure to handle every
            aspect of our clients’ FF&E needs in-house. Every project is customized, in
            collaboration with luxury designers.
          </div>
          <div className="-left-[20%] top-[30%] z-10 mx-auto hidden min-h-[80%] w-[40%] bg-yellow-400 p-10 pt-20 pb-20 text-center text-xl md:absolute md:block">
            We completely handle the process from logistics and design, to sourcing and production,
            to shipping and installation. Our quality control is unmatched.
          </div>
          {/* <div
            className="relative mt-8 flex flex-row flex-wrap justify-center gap-[12px] pb-[36px]
          md:left-[25%] md:w-[50vw] md:justify-start"
          > */}
          <div className=" relative mx-[12px] mr-[26px] mt-8 grid grid-cols-2 gap-2 pb-[36px] md:left-[25%] md:mx-0 md:w-[50vw] lg:grid-cols-4">
            <div
              className="w-30 h-30 z-20 flex flex-col items-center bg-white p-2 shadow-xl transition
            duration-700 ease-in-out hover:scale-110"
            >
              <Image width={65} height={65} className="m-auto" src="/assets/fiedl.png" alt="ok" />
              <div className="m-4 w-[100px] text-center text-sm text-black">
                Field <br />
                Experts
              </div>
            </div>
            <div className="w-30 h-30 z-20 flex flex-col items-center bg-white p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
              <Image width={65} height={65} className="m-auto" src="/assets/turnkey.png" alt="ok" />
              <div className="m-4 w-[100px] text-center text-sm text-black">Turnkey Solutions</div>
            </div>
            <div className="w-30 h-30 z-20 flex flex-col items-center bg-white p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
              <Image width={65} height={65} className="m-auto" src="/assets/global.png" alt="ok" />
              <div className="m-4 w-[100px] text-center text-sm text-black">Global Coverage</div>
            </div>
            <div className="w-30 h-30 z-20 flex flex-col items-center bg-white p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
              <Image width={65} height={65} className="m-auto" src="/assets/quality.png" alt="ok" />
              <div className="m-4 w-[100px] text-center text-sm text-black">Unmatched Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--------------------------------------- Projects-------------------------------------------- --> */}
      <div className="projectContainer" data-scroll-section>
        <div className="flex items-center justify-center gap-2">
          <div className="playfair pl-[10%] text-[2.4rem] md:text-[4vw]">Our Projects</div>
          <div className="h-1 w-64 bg-red-900"></div>
        </div>
        <div className="px-[10%] py-[24px] text-center text-xl">
          All our projects are highly customized for the client, but each one has the I-Field stamp
          of unmatched quality.
        </div>
        <div className="pb-[64px]">
          <Swiper
            className="swiper mx-16 h-[460px] pb-[64px] pt-8"
            navigation={true}
            modules={[Navigation]}
          >
            {/* <!-- Additional required wrapper --> */}
            {/* <!-- Slides --> */}
            <SwiperSlide className="swiper-slide w-full">
              <div className="relative h-full max-w-[800px]">
                <div className="absolute top-[6%] left-[24px] text-6xl text-gray-400">01</div>
                <Image
                  width={500}
                  height={500}
                  className="absolute right-0 top-[0%] w-[60vw] min-w-[260px] max-w-[500px]"
                  src="/assets/projects/hilton chad.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={500}
                  className="absolute left-0 top-[28%] w-[50vw] min-w-[230px] max-w-[400px]"
                  src="/assets/projects/hilton chad2.png"
                  alt=""
                />
                <div className="absolute bottom-[20%] right-[10%]">
                  <button className="btn">View project</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-full">
              <div className="relative h-full max-w-[800px]">
                <div className="absolute top-[6%] left-[24px] text-6xl text-gray-400">02</div>
                <Image
                  width={500}
                  height={500}
                  className="absolute right-0 top-[0%] w-[60vw] min-w-[260px] max-w-[500px]"
                  src="/assets/projects/marriot gujarat.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={500}
                  className="absolute left-0 top-[28%] w-[50vw] min-w-[230px] max-w-[400px]"
                  src="/assets/projects/marriot gujarat2.png"
                  alt=""
                />
                <div className="absolute bottom-[15%] right-[10%]">
                  <button className="btn">View project</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-full">
              <div className="relative h-full max-w-[800px]">
                <div className="absolute top-[6%] left-[24px] text-6xl text-gray-400">03</div>
                <Image
                  width={500}
                  height={500}
                  className="absolute right-0 top-[0%] w-[60vw] min-w-[260px] max-w-[500px]"
                  src="/assets/projects/nairobi crowne plaza.png"
                  alt=""
                />
                <Image
                  width={500}
                  height={500}
                  className="absolute left-0 top-[28%] w-[50vw] min-w-[230px] max-w-[400px]"
                  src="/assets/projects/nairobi crowne plaza2.png"
                  alt=""
                />
                <div className="absolute bottom-[15%] right-[10%]">
                  <button className="btn">View project</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <!-------------------------- Achievements ----------------------------> */}
      <div
        className="container mx-auto mt-4 mb-8 flex h-full w-full justify-center bg-white"
        data-scroll-section
      >
        <div className="">
          <div className="mx-auto flex flex-row">
            <div className="m-8 flex w-64 flex-col items-center justify-center gap-4 text-center align-middle">
              <Image src="/assets/aahoa.png" alt="aahoa member" width={150} height={150} />
              Member of American Association of Hotels
              <Image src="/assets/cfa.png" alt="cfa member" width={150} height={150} />
              Member of China Furniture Association
              <Image src="/assets/chambers.png" alt="cfa member" width={150} height={150} />
              Member of Dubai Chambers
            </div>
            <div className="m-8 flex flex-col justify-center gap-4">
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={20} enableScrollSpy scrollSpyDelay={1000} />
                <div className="montserrat text-lg">Countries</div>
              </div>
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={60} enableScrollSpy scrollSpyDelay={1000} />+
                <div className="montserrat text-lg">Projects Completed</div>
              </div>
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={390} enableScrollSpy scrollSpyDelay={1000} />
                <div className="montserrat text-lg">Global staff</div>
              </div>
              <div className="playfair text-5xl ">
                <CountUp
                  duration={5}
                  end={20000}
                  enableScrollSpy
                  scrollSpyOnce
                  seperator={','}
                  scrollSpyDelay={1000}
                />
                m²
                <div className="montserrat text-lg">Factory with end to end capacity</div>
              </div>
              <div className="playfair text-5xl ">
                <CountUp duration={5} end={20} enableScrollSpy scrollSpyDelay={1000} />
                <div className="montserrat text-lg">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll-section>
        <div className="flex items-center justify-center gap-2">
          <div className="playfair pl-[10%] text-[2.4rem] md:text-[4vw]">Our Clients</div>
          <div className="h-1 w-64 bg-red-900"></div>
        </div>

        <div class="mx-auto flex h-full w-[80%] flex-wrap justify-between" id="clients">
          <img src="/assets/clients/1.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/2.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/3.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/4.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/5.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/6.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/7.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/8.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/9.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/10.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/11.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/12.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/13.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/14.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/15.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/16.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/17.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/18.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/19.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/20.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/21.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/22.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/23.png" className="m-4 aspect-auto w-36"></img>
          <img src="/assets/clients/24.png" className="m-4 aspect-auto w-36"></img>
        </div>
      </div>
    </>
  )
}
