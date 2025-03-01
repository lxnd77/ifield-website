import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import TimelineSection from 'components/TimelineSection'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

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

    return (
      'perspective(200px) ' +
      '   rotateX(' +
      calcX +
      'deg) ' +
      '   rotateY(' +
      calcY +
      'deg)' +
      'translate(' +
      calcY * -10 +
      'px ,' +
      calcX * -5 +
      'px) '
    )
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
    <>
      <PageSEO title={`About Us - ${siteMetadata.title}`} description={siteMetadata.description} />
      <div className="container mx-auto w-[90vw] overflow-hidden">
        <div
          className="md:grid md:grid-cols-2"
          id="ex1"
          data-scroll-section
          ref={ex1}
          onMouseMove={mouse_position}
        >
          <div className="container mr-auto md:col-span-1 md:col-start-1">
            <h1 className="playfair text-[2.4rem] leading-normal md:mt-4 md:text-[4vw]">
              Our Company
            </h1>
            <br />
            <p className="text-xl">
              I-Field has been in the business of turnkey solutions for hotels, restaurants,
              residential properties, and commercial facilities. since 2003.
            </p>
            <br />
            <div className="items-center md:grid md:grid-cols-3">
              <div className="container  md:col-span-1 md:col-start-1">
                <Image
                  width={300}
                  height={300}
                  alt=""
                  src="/assets/pattern1.png"
                  className="my-auto mx-auto px-4 py-4"
                />
              </div>
              <div className="container text-justify text-sm md:col-span-2 md:col-start-2 md:px-4">
                When we first started out as hotel contractors, I-Field was based in Hong Kong with
                a representative office in Guangzhou, China. Since then, we've grown to be one of
                the largest FF&E solutions companies in Asia, with reach in over 20 countries. Our
                clients are the owners and developers for high-end hospitality facilities around the
                world, and we consistently deliver custom projects of impeccable quality. We are
                nearing <span className="font-bold">100 successfully completed contracts</span>.
              </div>
            </div>
            <div className="py-8 ">
              <h2 className="playfair mb-8 text-[2.4rem] leading-normal md:mt-4 md:text-5xl">
                Our Vision
              </h2>
              <div className="text-l">
                We are iField, relentless in our commitment to providing FF&E of unmatched quality
                to globally acclaimed luxury hotels. Our clients are assured of{' '}
                <span className="font-bold">immaculate attention </span>
                to detail in services that are streamlined, sustainable, and cost efficient. We are
                driven by excellence at every level, from CEO to floor worker, and from client
                relations to handing over the key.
              </div>
            </div>
            <div className="container  flex flex-row ">
              <div className="w-fit">
                <div className="h-4 w-4 rounded-full bg-[#981620]"></div>
                <div className="relative right-[40%] mx-auto h-40 border-r-4 border-[#981620]"></div>
              </div>
              <div>
                <p className="mt-4 pl-8 text-justify italic">
                  Our founder and CEO, Abhay, is an anchor in the FF&E industry, and personally
                  attends to every client and project for the best outcomes. Each level of our
                  operations is optimized to provide our clients with guaranteed quality in services
                  and products.
                </p>
              </div>
            </div>
          </div>

          <div className="ex1 h-full w-full md:relative md:col-span-1 md:col-start-2">
            <Image
              width={600}
              height={600}
              alt="Marriot Lagos"
              src="/assets/projects/lagos2.webp"
              className=" hImg pointer-events-none top-[10%] m-8 mx-auto aspect-square overflow-hidden object-cover drop-shadow-xl md:absolute md:left-[10%] md:w-[60%]"
              id="ex1-layer1"
              ref={ex1Layer1}
            />
            <Image
              width={600}
              height={600}
              alt="Marriot Gujarat"
              src="/assets/projects/marriot gujarat3.webp"
              className="hImg pointer-events-none m-8 mx-auto overflow-hidden object-cover drop-shadow-xl md:absolute md:right-[20%] md:top-[35%] md:h-[350px] md:w-[200px]"
              id="ex1-layer2"
              ref={ex1Layer2}
            />
          </div>
        </div>

        <div className="justify-between  md:grid md:grid-cols-2" data-scroll-section>
          <p className="my-4 md:col-span-1 md:col-start-1">
            We work with acclaimed architects and interior designers for our custom manufacturing
            process, which fuses the handwork of skilled craftspeople with state of the art
            technology, handling mid to high volume production to satisfy each unique client and
            their culture. We are well-versed in maintaining brand standards for various reputed
            operators.{' '}
            <span className=" font-bold">
              No two I-Field projects are the same, except for their quality.{' '}
            </span>
            Our comprehensive end-to-end service process ensures that projects are completed on
            time, at great prices, so your operations can begin the moment you turn the key.
          </p>
          <Image
            width={500}
            height={500}
            alt=""
            src="/assets/pattern2.png"
            className="my-auto justify-self-end md:col-span-1 md:col-start-2"
          />
        </div>

        <div className="mt-8" data-scroll-section>
          <div className="md:grid md:grid-cols-3">
            <div className="flex flex-col justify-start md:col-span-2 md:col-start-1">
              <h2 className="playfair mb-8 text-[2.4rem] leading-normal md:mt-2 md:text-5xl">
                Our Founder
              </h2>
              <br />
              <p className="">
                Abhay moved from India to China in 2003 and quickly acquired the skills, knowledge,
                and network, to found I-Field as one of China's leading turnkey manufacturers in
                FF&E. In 2012, Abhay led the initiative to invest in a customized furniture
                manufacturing unit in a joint venture with an established furniture company. Two
                short years later, he invested in establishing the GuangZhou Daka Import & Export
                Company so that I-Field could be entirely self-reliant in its operations.
                <br />
                <br />
                Abhay's expertise in FF&E goes in hand with his understanding of how to manage
                people. He learned to work with local industries and workers. Wherever I-Field has
                operations, local economies benefit from the employment opportunities, and employees
                benefit from specialized training programs.
                <br />
                <br />
                His passion, talent, and decades of experience make Abhay an amazing leader. He has
                a matchless track record of building positive relationships with everyone from
                stakeholders, to clients, to floor staff. His ventures and efforts have led the
                company's investments in expanding to hotels across the world.
              </p>
            </div>
            <div className="order-first mx-auto flex flex-col justify-end p-8 md:order-last md:col-span-1 md:col-start-3">
              <Image
                width={500}
                height={500}
                alt=""
                src="/assets/staff/7.webp"
                className="mx-auto h-80 w-80 rounded-full border-2 border-[#971C20] object-cover"
              />
            </div>
          </div>
          <div>
            <p className=""></p>
          </div>
        </div>

        <div className="mx-auto mt-16 flex w-[60vw] flex-wrap justify-around" data-scroll-section>
          <div className="playfair flex flex-col text-center text-xl">
            <Image
              width={500}
              height={500}
              src="/assets/staff/4.webp"
              alt=""
              className="h-60 w-60 rounded-full border-2  border-[#971C20] object-cover"
            />
            <h2 className="m-4">
              Crystal Huang <br /> Senior Manager Exports
            </h2>
          </div>
          <div className="playfair flex flex-col text-center text-xl">
            <Image
              width={500}
              height={500}
              src="/assets/staff/1.webp"
              alt=""
              className="h-60 w-60 rounded-full border-2 border-[#971C20] object-cover"
            />
            <h2 className="m-4">
              Tony Lee <br /> Exec. Manufacturing
            </h2>
          </div>
          <div className="playfair flex flex-col text-center text-xl">
            <Image
              width={500}
              height={500}
              src="/assets/staff/3.webp"
              alt=""
              className="h-60 w-60 rounded-full border-2 border-[#971C20] object-cover"
            />
            <h2 className="m-4">
              Tiger Chen <br /> Exec. Design
            </h2>
          </div>
          <div className="playfair flex flex-col text-center text-xl">
            <Image
              width={500}
              height={500}
              src="/assets/staff/2.webp"
              alt=""
              className="object- h-60 w-60 rounded-full border-2 border-[#971C20]"
            />
            <h2 className="m-4">
              Vicki Leung <br /> Exec. Procurement
            </h2>
          </div>
          <div className="playfair flex flex-col text-center text-xl">
            <Image
              width={500}
              height={500}
              src="/assets/staff/6.webp"
              alt=""
              className="h-60 w-60 rounded-full border-2 border-[#971C20] object-cover"
            />
            <h2 className="m-4">
              David Xu <br /> Project Manager <br /> Manufacturing
            </h2>
          </div>
          <div className="playfair flex flex-col text-center text-xl">
            <Image
              width={500}
              height={500}
              src="/assets/staff/5.webp"
              alt=""
              className="h-60 w-60 rounded-full border-2 border-[#971C20] object-cover"
            />
            <h2 className="m-4">
              Punya Bhargava <br /> Business Development <br /> Manager
            </h2>
          </div>
        </div>
        {/* -------------------------- Timeline --------------------------------- */}
        <div className="bg-[#191919] text-white" data-scroll-section>
          <h1 className="playfair mt-16 ml-16 text-6xl leading-normal">Timeline</h1>
          <Swiper
            // install Swiper modules
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper
            }}
            grabCursor={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              type: 'bullets',
              clickable: 'true',
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + ++index + '</span>'
              },
            }}
            className="swiperabout"
          >
            <SwiperSlide className="">
              <TimelineSection
                year="2003"
                month="May"
                text="I field is founded in Hong Kong Acquired brand verification, and
                      developed supply and execution systems."
                pic="/assets/old1.webp"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <TimelineSection
                year="2011"
                month="June"
                text="Established a joint venture factory in Dongguan, China"
                pic="/assets/old2.webp"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <TimelineSection
                year="2013"
                month="October"
                text="Daka Import & Export is established in Guangzhou"
                pic="/assets/old3.webp"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <TimelineSection
                year="2019"
                month="February"
                text="I-Field USA is established in Houston, Texas"
                pic="/assets/old4.webp"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <TimelineSection
                year="2019"
                month="December"
                text="I Field International Pvt. Ltd., India is established in Jaipur to meet the
              needs of our growing workforce."
                pic="/assets/old5.webp"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <TimelineSection
                year="2020"
                month="December"
                text="I Field Furnishing Trading L.L.C is established in Dubai as a control hub for
              our work in the Middle East and East Africa"
                pic="/assets/old6.webp"
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <TimelineSection
                year="2021"
                month="November"
                text="I-Field Interiors is established in Lagos, Nigeria, to expand our work in the
              rest of Africa."
                pic="/assets/7.webp"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
