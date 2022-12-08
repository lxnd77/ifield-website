// import LocomotiveScroll from 'locomotive-scroll'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

export default function About() {
  const ex1 = useRef()
  const ex1Layer1 = useRef()
  const ex1Layer2 = useRef()
  const swiperRef = useRef(Swiper)
  let constrain = 200

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect()
    let calcX = -(y - box.y - box.height / 2) / constrain
    let calcY = (x - box.x - box.width / 2) / constrain

    return 'perspective(100px) ' + '   rotateX(' + calcX + 'deg) ' + '   rotateY(' + calcY + 'deg)'
  }

  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl)
  }

  function mouse_position(e) {
    let xy = [e.clientX, e.clientY]

    let position1 = xy.concat([ex1Layer1.current])
    let position2 = xy.concat([ex1Layer2.current])

    window.requestAnimationFrame(function () {
      transformElement(ex1Layer1.current, position1)
      transformElement(ex1Layer2.current, position2)
    })
  }
  return (
    <div className="container mx-auto w-[90vw] overflow-hidden" onMouseMove={mouse_position}>
      <div className="md:grid md:grid-cols-2" id="ex1" data-scroll-section ref={ex1}>
        <div className="container mr-auto md:col-span-1 md:col-start-1">
          <h1 className="playfair text-6xl leading-normal md:mt-4">
            Our <br />
            Company
          </h1>
          <br />
          <p className="text-xl">
            I-Field has been in the business of turnkey solutions for hotels, restaurants,
            residential properties, and commercial facilities. since 2003.
          </p>
          <br />
          <div className="md:grid md:grid-cols-3">
            <div className="container md:col-span-1 md:col-start-1">
              <img src="assets/pattern1.png" className="my-auto mx-auto px-4 py-4" />
            </div>
            <div className="container text-justify text-sm md:col-span-2 md:col-start-2 md:px-4">
              When we first started out as hotel contractors, I-Field was based in Hong Kong with a
              representative office in Guangzhou, China. Since then, we’ve grown to be one of the
              largest FF&E solutions companies in Asia, with reach in over 20 countries. Our clients
              are the owners and developers for high-end hospitality facilities around the world,
              and we consistently deliver custom projects of impeccable quality. We are nearing 100
              successfully completed contracts.
            </div>
          </div>
          <div className="container mx-4 flex flex-row pt-8">
            <div className="w-fit">
              <div className="h-4 w-4 rounded-full bg-[#981620]"></div>
              <div className="relative right-[40%] mx-auto h-48 border-r-4 border-[#981620]"></div>
            </div>
            <div>
              <p className="ml-8 mt-16 text-justify italic">
                Our founder and CEO, Abhay, is an anchor in the FF&E industry, and personally
                attends to every client and project for the best outcomes. Each level of our
                operations is optimized to provide our clients with guaranteed quality in services
                and products.
              </p>
            </div>
          </div>
        </div>

        <div className="ex1 h-full w-full md:relative md:col-span-1 md:col-start-2">
          <img
            src="assets/projects/marriot gujarat3.png"
            className="hImg pointer-events-none top-[10%] aspect-square overflow-hidden object-cover drop-shadow-2xl md:absolute md:left-[10%] md:w-[60%]"
            id="ex1-layer1"
            ref={ex1Layer1}
          />
          <img
            src="assets/projects/marriot gujarat3.png"
            className="hImg pointer-events-none overflow-hidden object-cover drop-shadow-2xl md:absolute md:right-[20%] md:top-[35%] md:h-[350px] md:w-[200px]"
            id="ex1-layer2"
            ref={ex1Layer2}
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2" data-scroll-section>
        <p className="mx-4 my-auto md:col-span-1 md:col-start-1">
          We work with acclaimed architects and interior designers for our custom manufacturing
          process, which fuses the handwork of skilled craftspeople with state of the art
          technology, handling mid to high volume production to satisfy each unique client and their
          culture. We are well-versed in maintaining brand standards for various reputed operators.
          No two I-Field projects are the same, except for their quality. Our comprehensive
          end-to-end service process ensures that projects are completed on time, at great prices,
          so your operations can begin the moment you turn the key.
        </p>
        <img
          src="assets/pattern2.png"
          className="absolute -right-[10%] my-auto md:col-span-1 md:col-start-2"
        />
      </div>

      <div className="mt-32" data-scroll-section>
        <div className="md:grid md:grid-cols-3">
          <div className="flex flex-col justify-end md:col-span-2 md:col-start-1">
            <h1 className="playfair text-6xl leading-normal md:mt-4">
              Our <br />
              Founder
            </h1>
            <br />
            <p className="">
              Abhay moved from India to China in 2003 and quickly acquired the skills, knowledge,
              and network, to found I-Field as one of China’s leading turnkey manufacturers in FF&E.
              In 2012, Abhay led the initiative to invest in a customized furniture manufacturing
              unit in a joint venture with an established furniture company. Two short years later,
              he invested in establishing the GuangZhou Daka Import & Export Company so that I-Field
              could be entirely self-reliant in its operations.
              <br />
              <br />
              Abhay’s expertise in FF&E goes in hand with his understanding of how to manage people.
              He learned to work with local industries and workers. Wherever I-Field has operations,
              local economies benefit from the employment opportunities, and employees benefit from
              specialized training programs.
              <br />
              <br />
              His passion, talent, and decades of experience make Abhay an amazing leader. He has a
              matchless track record of building positive relationships with everyone from
              stakeholders, to clients, to floor staff. His ventures and efforts have led the
              company’s investments in expanding to hotels across the world.
            </p>
          </div>
          <div className="flex flex-col justify-end md:col-span-1 md:col-start-3">
            <img src="assets/profile.png" className="" />
          </div>
        </div>
        <div>
          <p className=""></p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-[70vw] flex-wrap justify-around" data-scroll-section>
        <img src="assets/profile.png" className="mb-16 h-80 w-80" />
        <img src="assets/profile.png" className="mb-16 h-80 w-80" />
        <img src="assets/profile.png" className="mb-16 h-80 w-80" />
        <img src="assets/profile.png" className="h-80 w-80" />
        <img src="assets/profile.png" className="h-80 w-80" />
        <img src="assets/profile.png" className="h-80 w-80" />
      </div>

      <div className="bg-[#191919] text-white" data-scroll-section>
        <h1 className="playfair mt-16 ml-16 text-6xl leading-normal">Timeline</h1>
        <Swiper
          // install Swiper modules
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          grabCursor={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            type: 'bullets',
            clickable: 'true',
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + index + '</span>'
            },
          }}
          className="swiperabout"
        >
          <SwiperSlide className="">
            <div className="relative flex w-[80%] flex-row p-4">
              <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
                2003
              </h2>
              <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
                <img src="assets/7.jpg" className="mx-auto h-[202px] w-[536px] object-cover" />

                <div className="flex flex-row justify-around">
                  <div>
                    <h3 className="montserrat my-4 text-xl font-bold">May</h3>
                    <p className="montserrat my-4 w-[50%] text-xl">
                      I field is founded in Hong Kong <br /> Acquired brand verification, and
                      developed supply and execution systems.
                    </p>
                  </div>
                  <img src="assets/pattern1.png" className="m-8 h-32 w-32"></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative flex w-[80%] flex-row p-4">
              <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
                2011
              </h2>
              <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
                <img src="assets/7.jpg" className="mx-auto h-[202px] w-[536px] object-cover" />

                <div className="flex flex-row justify-around">
                  <div>
                    <h3 className="montserrat my-4 text-xl font-bold">June</h3>
                    <p className="montserrat my-4 w-[50%] text-xl">
                      Established a joint venture factory in Dongguan, China
                    </p>
                  </div>
                  <img src="assets/pattern1.png" className="m-8 h-32 w-32"></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative flex w-[80%] flex-row p-4">
              <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
                2013
              </h2>
              <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
                <img src="assets/7.jpg" className="mx-auto h-[202px] w-[536px] object-cover" />

                <div className="flex flex-row justify-around">
                  <div>
                    <h3 className="montserrat my-4 text-xl font-bold">October</h3>
                    <p className="montserrat my-4 w-[50%] text-xl">
                      Daka Import &Export is established in Guangzhou
                    </p>
                  </div>
                  <img src="assets/pattern1.png" className="m-8 h-32 w-32"></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative flex w-[80%] flex-row p-4">
              <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
                2019
              </h2>
              <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
                <img src="assets/7.jpg" className="mx-auto h-[202px] w-[536px] object-cover" />

                <div className="flex flex-row justify-around">
                  <div>
                    <h3 className="montserrat my-4 text-xl font-bold">February</h3>
                    <p className="montserrat my-4 w-[50%] text-xl">
                      I-Field USA is established in Houston, Houston, Texas
                    </p>
                  </div>
                  <img src="assets/pattern1.png" className="m-8 h-32 w-32"></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative flex w-[80%] flex-row p-4">
              <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
                2019
              </h2>
              <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
                <img src="assets/7.jpg" className="mx-auto h-[202px] w-[536px] object-cover" />

                <div className="flex flex-row justify-around">
                  <div>
                    <h3 className="montserrat my-4 text-xl font-bold">December</h3>
                    <p className="montserrat my-4 w-[50%] text-xl">
                      I Field International Pvt. Ltd., India is established in Jaipur to meet the
                      needs of our growing workforce.
                    </p>
                  </div>
                  <img src="assets/pattern1.png" className="m-8 h-32 w-32"></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative flex w-[80%] flex-row p-4">
              <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
                2020
              </h2>
              <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
                <img src="assets/7.jpg" className="mx-auto h-[202px] w-[536px] object-cover" />

                <div className="flex flex-row justify-around">
                  <div>
                    <h3 className="montserrat my-4 text-xl font-bold">December</h3>
                    <p className="montserrat my-4 w-[50%] text-xl">
                      I Field Furnishing Trading L.L.C is established in Dubai as a control hub for
                      our work in the Middle East and East Africa
                    </p>
                  </div>
                  <img src="assets/pattern1.png" className="m-8 h-32 w-32"></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="relative flex w-[80%] flex-row p-4">
              <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
                2021
              </h2>
              <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
                <img src="assets/7.jpg" className="mx-auto h-[202px] w-[536px] object-cover" />

                <div className="flex flex-row justify-around">
                  <div>
                    <h3 className="montserrat my-4 text-xl font-bold">November</h3>
                    <p className="montserrat my-4 w-[50%] text-xl">
                      I-Field Interiors is established in Lagos, Nigeria, to expand our work in the
                      rest of Africa.
                    </p>
                  </div>
                  <img src="assets/pattern1.png" className="m-8 h-32 w-32"></img>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
