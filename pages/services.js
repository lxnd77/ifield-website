import styles from '../css/services.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Mousewheel, Scrollbar } from 'swiper'

export default function Services() {
  return (
    <section className="container z-0 mx-auto mt-16 bg-white" data-scroll-section id="con">
      <div
        className="playfair pointer-events-none z-50 my-auto h-full w-full bg-white/40  text-left text-[2.6rem]
       leading-tight text-black md:text-[4vw]"
      >
        <h1 className="">Our Services</h1>
      </div>
      <div className="mt-8 flex flex-row">
        <Swiper
          data-scroll
          // navigation={true}
          modules={[Navigation, Mousewheel, FreeMode, Scrollbar]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          // autoplay={{ delay: 3000 }}
          scrollbar={{ draggable: true }}
          mousewheel={{ enabled: true, sensitivity: 6 }}
          freeMode={{ enabled: true, sticky: false, momentumBounce: false }}
          initialSlide={0}
          // rewind={true}
          className="mt-8"
        >
          <SwiperSlide>
            <div className={styles.row}>
              <h2>Assessment</h2>
              <ul>
                <li>On-Site Assessments</li>
                <li>On-Site Measurement</li>
                <li>Customized Solutions</li>
                <li>Specialists in Residential and Commercial Hospitality</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.row}>
              <h2>Design and Detailing</h2>
              <ul>
                <li>AUTOCAD expertise</li>
                <li>Design Consultation</li>
                <li>Production drawing</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.row}>
              <h2>Procurement</h2>
              <ul>
                <li>Sourcing</li>
                <li>Material Selection</li>
                <li>Sample Submission</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.row}>
              <h2>Production</h2>
              <ul>
                <li>In-House Manufacture</li>
                <li>Lighting and fixtures</li>
                <li>Furniture</li>
                <li>Doors</li>
                <li>Upholstery</li>
                <li>Drapery</li>
                <li>Flooring</li>
                <li>Carpets</li>
                <li>Woodwork</li>
                <li>Metalwork</li>
                <li>Glasswork</li>
                <li>Stonework</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.row}>
              <h2>Delivery and Logistics</h2>
              <ul>
                <li>Packaging and Shipping</li>
                <li>Certifications</li>
                <li>Regulation adherence</li>
                <li>Shipping Schedules</li>
                <li>Consultation</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.row}>
              <h2>Installation</h2>
              <ul>
                <li>Expert In-house Team</li>
                <li>Full Fit-out</li>
                <li>Ceilings, walls, and hard finishes</li>
                <li>Quality Control</li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Image
        src="/assets/pattern3.png"
        width={700}
        height={700}
        alt=""
        className="absolute top-[10vh] h-[100vh] w-auto object-cover"
      ></Image> */}
      <div className="z-10 w-[80%] bg-white">
        <div className="mx-auto flex flex-row ">
          <div className="montserrat m-4 w-[35%] text-right text-3xl font-bold">
            300,000 m<sup>2</sup>
          </div>
          <div className="playfair m-4 text-left align-baseline text-2xl">
            factory equipped with end-to-end capacity.
          </div>
        </div>
        <div className="mx-auto flex flex-row">
          <div className="montserrat m-4 w-[35%] text-right text-3xl font-bold">98</div>
          <div className="playfair m-4 text-left align-baseline text-2xl">machines.</div>
        </div>
        <div className="mx-auto flex flex-row">
          <div className="montserrat m-4 w-[35%] text-right text-3xl font-bold">300</div>
          <div className="playfair m-4 text-left align-baseline text-2xl">global staff.</div>
        </div>
        <div className="mx-auto flex flex-row ">
          <div className="montserrat m-4 w-[35%] text-right text-3xl font-bold">
            20,000<sup>2</sup>
          </div>
          <div className="playfair m-4 text-left align-baseline text-2xl">
            unit annual production capacity.
          </div>
        </div>
      </div>
    </section>
  )
}
