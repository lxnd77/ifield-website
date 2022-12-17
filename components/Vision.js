import { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

export default function Vision() {
  const swiperRef = useRef(Swiper)
  const menuItems = [
    'Assessment',
    'Design',
    'Procurement',
    'Production',
    'Logistics',
    'Delivery',
    'Installation',
  ]
  const menuText = [
    'We assess the site and business to ensure clarity on scope and budgeting. We provide cost engineering services to ensure the best use of your budget. We’ll provide expert recommendations, and full transparency. We make sure you’re optimizing your budget.',
    'Our in-house experts provide AUTOCAD illustrations ensuring precision and consistency. A fine-tuned, collaborative process ensures that the designs are exactly as you want them to be. Manufacturing begins only when clients are fully satisfied.',
    'We work with you to identify and source the ideal materials for your purposes, and provide samples to make sure you are fully satisfied. Our sourcing team has access to materials from across the globe and will find you the best balance between budget & quality.',
    'We source raw materials of the highest quality, and are equipped for the custom manufacture and engineering of all FF&E items in our own facilities. From light fixtures and ceiling work, to drapery, furniture, metal and glass work, all the way down to carpets, rugs, and flooring, everything is handled in-house.',
    'We navigate international regulations and provide logistical support to ensure seamless transportation. We have over 20 years of experience with managing the intricacies of transporting FF&E items internationally, and your experience will be hassle-free.',
    'Our streamlined process delivers your goods on time, in perfect condition, ready for installation. We rely on our own shipping division which provides on-time delivery and that all items are in mint condition.',
    'Our highly-trained team installs your customized items, and handles fit-out work like painting, plastering, tiling and more. When we say turnkey, we mean it. When our expert team is done, the place is fully ready for our clients to get business going.',
  ]
  const items = []
  menuItems.forEach((element, index) => {
    items.push(
      <SwiperSlide key={index}>
        <div className="mx-auto w-[80%] rounded-xl p-4 shadow-xl">
          <h2 className="playfair m-8 text-[24px]">{element}</h2>
          <p className="montserrat m-8 text-[16px]">{menuText[index]}</p>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <div className="cont mx-auto w-[80%]" data-scroll-section>
      <Swiper
        // install Swiper modules
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + menuItems[index] + '</span>'
          },
        }}
        // Navigation arrows
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <div className="mx-auto flex h-32 flex-row justify-around">
          <button
            onClick={() => {
              swiperRef.current?.slideTo(0, 600)
            }}
          >
            <img src="./assets/assessment.png" alt="" className="h-8 w-8 hover:scale-110" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideTo(1, 600)
            }}
          >
            <img src="./assets/design.png" alt="" className="h-8 w-8 hover:scale-110" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideTo(2, 600)
            }}
          >
            <img src="./assets/procuremnt.png" alt="" className="h-8 w-8 hover:scale-110" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideTo(3, 600)
            }}
          >
            <img src="./assets/production.png" className="h-8 w-8 hover:scale-110" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideTo(4, 600)
            }}
          >
            <img src="./assets/logistics.png" className="h-8 w-8 hover:scale-110" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideTo(5, 600)
            }}
          >
            <img src="./assets/delivery.png" className="h-8 w-8 hover:scale-110" />
          </button>
          <button
            onClick={() => {
              swiperRef.current?.slideTo(6, 600)
            }}
          >
            <img src="./assets/installation.png" className="h-8 w-8 hover:scale-110" />
          </button>
        </div>
        {items}
      </Swiper>
    </div>
  )
}
