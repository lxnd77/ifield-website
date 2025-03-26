import Link from './Link'
import Image from 'next/image'
import { useState } from 'react'
import sendNewsLetter from 'pages/api/sendNewsletter'

export default function Footer() {
  const submitNewsletter = async (event) => {
    event.preventDefault()
    const newsletterEmail = event.target.newsletterEmail.value
    console.log(event.target.newsletterEmail.value)
    sendNewsLetter(newsletterEmail)
    //
  }

  return (
    <>
      <a download href="static/Ifield Brochure 2025.pdf" className="float z-[90]">
        <span className="tool" data-tip="Download Brochure" tabIndex="1">
          <svg
            className="my-float"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13 12h3l-4 4-4-4h3V8h2v4zm2-8H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z" />
          </svg>
        </span>
      </a>
      <footer>
        <div className="w-full md:h-[500px]" data-scroll-section>
          <hr className="m-8 mx-auto w-[80%] border-t-2 border-[#981C20]" />
          <div className=" mx-auto flex flex-col justify-around text-[14px] md:w-[90%] md:flex-row">
            <div className="mx-auto flex min-w-[300px] max-w-[80%] grow flex-col justify-around gap-4 ">
              <Image
                src="/assets/logoblack.svg"
                width="150"
                height="300"
                alt="logo"
                className="mb-4"
              />
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/phone.png" width="30" height="30" alt="phone icon" />
                <p> +971 04 354 0227 | +971 50 860 7058 </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/mail.png" width="30" height="30" alt="mail icon" />
                <a href="mailto:info@ifield.ae">
                  <p className="text-red-800 underline">info@ifield.ae</p>
                </a>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/location.png" width="30" height="30" alt="location icon" />
                <p>
                  Office 214, European Business Centre, Dubai Investment Park 1, Dubai, United Arab
                  Emirates, P.O. Box No. 451970
                </p>
              </div>
            </div>
            <div className="m-4 mx-auto flex w-[80%] flex-col justify-between gap-8">
              <div>
                <Image
                  src="/assets/pattern3.png"
                  className="md:float-right"
                  width="300"
                  height="30"
                  alt="pattern"
                />
              </div>
              <div className="flex flex-row justify-around gap-2 md:flex-col md:text-right">
                <Link className="hover:text-red-800" href={'/'}>
                  Home
                </Link>
                <Link className="hover:text-red-800" href={'/about'}>
                  About
                </Link>
                <Link className="hover:text-red-800" href={'/process'}>
                  Process
                </Link>
                <Link className="hover:text-red-800" href={'/projects'}>
                  Projects
                </Link>
                <Link className="hover:text-red-800" href={'/csr'}>
                  CSR
                </Link>
                <Link className="hover:text-red-800" href={'/contact'}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div>
            <p className="mx-2 mb-2 mt-4 text-center text-sm font-bold">
              <span>CHINA | HONGKONG | INDIA | BANGLADESH | UAE | NIGERIA | UK | USA</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
