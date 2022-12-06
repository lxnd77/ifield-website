import GlobeSection from '@/components/GlobeSection'
import Vision from '@/components/Vision'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

export default function Home() {
  const constrain = 260

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect()
    let calcX = -(y - box.y - box.height / 2) / constrain
    let calcY = (x - box.x - box.width / 2) / constrain

    return `perspective(100px) rotateX(${calcX * 0.5}deg) rotateY(${calcY * -0.7}deg) 
    translate(${calcY * 30}px, ${calcX * 20}px)`
  }

  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl)
  }

  function mouse_position(e) {
    let xy = [e.clientX, e.clientY]
    let position1 = xy.concat([e.target.children[0]])
    let position2 = xy.concat([e.target.children[1]])
    let position3 = xy.concat([e.target.children[2]])
    let position4 = xy.concat([e.target.children[3]])

    window.requestAnimationFrame(function () {
      transformElement(e.target.children[0], position1)
      transformElement(e.target.children[1], position2)
      transformElement(e.target.children[2], position3)
      transformElement(e.target.children[3], position4)
    })
  }

  return (
    <>
      {/* ------------------------------------ HERO ----------------------------- */}
      <div
        className="relative z-20 h-[90vh] w-full bg-black"
        onMouseMove={mouse_position}
        data-scroll-section
      >
        <img
          className="hImg pointer-events-none absolute right-[20%] top-[15%] w-[400px]"
          src="./assets/Rectangle 45.png"
          alt=""
          id="i2"
        />
        <img
          className="hImg pointer-events-none absolute right-[10%] bottom-[10%] w-[300px]"
          src="./assets/Rectangle 50.png"
          alt=""
          id="i1"
        />
        <img
          className="hImg pointer-events-none absolute left-[8%] bottom-[15%] w-[450px]"
          src="./assets/Rectangle 48.png"
          alt=""
          id="i4"
        />
        <img
          className="hImg pointer-events-none absolute left-[15%] top-[10%] w-[250px]"
          src="./assets/Rectangle 49.png"
          alt=""
          id="i3"
        />

        <div className="playfair pointer-events-none absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl text-white">
          FF&E Manufacturing <br />
          Turnkey Solutions
        </div>
        <div className="pointer-events-none absolute left-[50%] top-[66%] translate-x-[-50%] translate-y-[-50%]">
          <button className="btn">Get in touch</button>
        </div>
      </div>

      {/* <!------------------------------ The I-Field Advantage --------------------------------------> */}

      {/*<!-------------------Mobile Only--------------------------------------------------------->*/}
      <div className="static bg-black md:hidden" data-scroll-section>
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="playfair col-span-1 mb-8 text-center font-serif text-5xl text-white">
            Our Distinction
          </div>
          <div className="col-span-1 mt-8 h-1 w-full bg-red-900"></div>
        </div>
        <img className="h-[100vh] object-cover" src="/assets/7.jpg" alt="hotel lobby" />
        <div className="mx-14 mt-14 w-[80%] items-center text-xl text-white">
          <div>
            We are a team of industry experts offering deluxe turnkey solutions for FF&E
            manufacture, supply, and installation. Established and operated by hotel owners and
            industry experts, our end-to-end services ensure high client satisfaction around the
            globe.
          </div>
          <div className="mt-8 text-xl">
            Our core principle is to provide the best in products, prices, efficiency, and customer
            service, and that’s the I-Field advantage.
          </div>
          <button className="mt-8 mb-8 h-12 w-48 bg-yellow-400 text-center text-black">
            Get In Touch
          </button>
        </div>
      </div>

      <div
        className="static hidden min-h-[100vh] w-[100%] overflow-hidden md:block"
        data-scroll-section
      >
        <div className="relative h-[95vh] bg-black md:w-[90vw]">
          <img
            className="absolute top-40 h-[100vh] object-cover object-right md:w-2/5"
            src="/assets/7.jpg"
            alt="hotel lobby"
          />
          <div className="distinction playfair absolute inset-[30%] h-fit text-6xl text-white">
            Our Distinction
          </div>

          <div className="absolute inset-[40%] mx-14 mt-14 hidden w-[40vw] text-xl text-white md:block">
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
            <button className="mt-8 h-12 w-48 bg-yellow-400 text-black">Get In Touch</button>
          </div>
        </div>
      </div>

      <GlobeSection />

      {/*<!-- Process -->*/}

      <div className="mt-[140px] mb-2 flex items-center justify-center gap-2" data-scroll-section>
        <div className="playfair pl-[10%] text-6xl">Our Process</div>
        <div className="h-1 w-64 bg-red-900"></div>
      </div>
      <Vision />

      {/* <!-------------------------- Achievements ----------------------------> */}
      <div
        className="container mx-auto mt-40 flex h-full w-full justify-center bg-white"
        data-scroll-section
      >
        <div className="grid w-[60%] grid-cols-6 gap-4">
          <div className="col-span-3 col-start-1 mx-auto flex justify-center">
            <img className="object-contain" src="/assets/aahoa.png" alt="AAHOA" />
          </div>
          <div className="col-span-3 col-start-4 mx-auto flex justify-center">
            <img className="object-contain" src="/assets/cfa.png" alt="CFA" />
          </div>
          <div className="col-span-3 col-start-1 mx-auto flex justify-center text-center">
            Member of Asian American Hotel Owners Association
          </div>
          <div className="col-span-3 col-start-4 mx-auto flex justify-center text-center">
            Member of Chinese National Furniture Association
          </div>
          <div className="col-span-2 col-start-1 flex-col items-center justify-center text-center">
            <div className="mx-auto flex justify-center font-serif text-5xl text-black">50</div>
            <div className="m-4 mx-auto flex justify-center font-serif text-xl text-black">
              Completed Projects
            </div>
          </div>
          <div className="col-span-2 col-start-3 text-center">
            <div className="mx-auto flex justify-center font-serif text-5xl text-black">186</div>
            <div className="m-4 mx-auto flex justify-center font-serif text-xl text-black">
              Trained Professionals
            </div>
          </div>
          <div className="col-span-2 col-start-5 text-center">
            <div className="mx-auto flex justify-center font-serif text-5xl text-black">5</div>
            <div className="m-4 mx-auto flex justify-center font-serif text-xl text-black">
              International Offices
            </div>
          </div>
        </div>
      </div>

      {/* <!------------------------------------------- Impact -------------------------------------> */}
      <div className="static min-h-[100vh] w-[100%] overflow-hidden bg-white" data-scroll-section>
        <div className="xs:w-full relative mt-20 min-h-[55vh] bg-black lg:left-[20%] lg:w-[70%]">
          <div className="absolute top-16 left-10 h-1 w-[35%] bg-red-900"></div>
          <div className="playfair absolute top-10 left-[40%] text-5xl text-white">Our Impact</div>
          <div className="absolute top-[25%] left-[25%] m-8 w-[50%] text-xl text-white">
            I-Field is equipped with expert teams and world-class infrastructure to handle every
            aspect of our clients’ FF&E needs in-house. Every project is customized, in
            collaboration with luxury designers.
          </div>
          <div className="absolute -left-[20%] top-[40%] z-10 hidden min-h-[80%] w-[40%] bg-yellow-400 p-10 pt-20 pb-20 text-center text-xl md:block">
            We completely handle the process from logistics and design, to sourcing and production,
            to shipping and installation. Our quality control is unmatched.
          </div>
          <div className="w-30 h-30 absolute top-[80%] left-[25%] z-20 m-8 bg-white p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
            <img className="m-auto" src="/assets/fiedl.png" alt="ok" />
            <div className="m-4 w-[100px] text-center text-sm text-black">
              Field <br />
              Experts
            </div>
          </div>
          <div className="w-30 h-30 absolute top-[80%] left-[45%] z-20 m-8 bg-white p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
            <img className="m-auto" src="/assets/turnkey.png" alt="ok" />
            <div className="m-4 w-[100px] text-center text-sm text-black">Turnkey Solutions</div>
          </div>
          <div className="h-30 absolute top-[80%] left-[65%] z-20 m-8 bg-white p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
            <img className="m-auto" src="/assets/global.png" alt="ok" />
            <div className="m-4 w-[100px] text-center text-sm text-black">Global Coverage</div>
          </div>
          <div className="h-30 absolute top-[80%] left-[85%] z-20 m-8 bg-white p-2 shadow-xl transition duration-700 ease-in-out hover:scale-110">
            <img className="m-auto" src="/assets/quality.png" alt="ok" />
            <div className="m-4 w-[100px] text-center text-sm text-black">Unmatched Quality</div>
          </div>
        </div>
      </div>

      {/* <!--------------------------------------- Projects-------------------------------------------- --> */}
      <div className="projectContainer" data-scroll-section>
        <div className="flex items-center justify-center gap-2">
          <div className="playfair pl-[10%] text-6xl">Our Projects</div>
          <div className="h-1 w-64 bg-red-900"></div>
        </div>
        <div className="px-[10%] py-[24px] text-center text-xl">
          All our projects are highly customized for the client, but each one has the I-Field stamp
          of unmatched quality.
        </div>
        <div className="pb-[64px]">
          <Swiper
            className="swiper mx-16 h-[400px] pb-[64px] pt-8"
            navigation={true}
            modules={[Navigation]}
          >
            {/* <!-- Additional required wrapper --> */}
            {/* <!-- Slides --> */}
            <SwiperSlide className="swiper-slide w-full">
              <div className="relative h-full max-w-[800px]">
                <div className="absolute top-[6%] left-[24px] text-6xl text-gray-400">01</div>
                <img
                  className="absolute right-0 top-[0%] w-[60vw] min-w-[260px] max-w-[500px]"
                  src="./assets/projects/hilton chad.png"
                  alt=""
                />
                <img
                  className="absolute left-0 top-[28%] w-[50vw] min-w-[230px] max-w-[400px]"
                  src="./assets/projects/hilton chad2.png"
                  alt=""
                />
                <div className="absolute bottom-0 right-[10%]">
                  <button className="btn">View project</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-full">
              <div className="relative h-full max-w-[800px]">
                <div className="absolute top-[6%] left-[24px] text-6xl text-gray-400">02</div>
                <img
                  className="absolute right-0 top-[0%] w-[60vw] min-w-[260px] max-w-[500px]"
                  src="./assets/projects/marriot gujarat.png"
                  alt=""
                />
                <img
                  className="absolute left-0 top-[28%] w-[50vw] min-w-[230px] max-w-[400px]"
                  src="./assets/projects/marriot gujarat2.png"
                  alt=""
                />
                <div className="absolute bottom-0 right-[10%]">
                  <button className="btn">View project</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide w-full">
              <div className="relative h-full max-w-[800px]">
                <div className="absolute top-[6%] left-[24px] text-6xl text-gray-400">03</div>
                <img
                  className="absolute right-0 top-[0%] w-[60vw] min-w-[260px] max-w-[500px]"
                  src="./assets/projects/nairobi crowne plaza.png"
                  alt=""
                />
                <img
                  className="absolute left-0 top-[28%] w-[50vw] min-w-[230px] max-w-[400px]"
                  src="./assets/projects/nairobi crowne plaza2.png"
                  alt=""
                />
                <div className="absolute bottom-0 right-[10%]">
                  <button className="btn">View project</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
