import Link from './Link'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <a href="#" target="_blank" className="float">
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
        <div className="h-600px w-full" data-scroll-section>
          <hr className="m-8 mx-auto w-[80%] border-t-2 border-red-700" />
          <div className="mx-auto flex flex-col text-[14px] md:w-[70%] md:flex-row">
            <div className="mx-auto mb-16 flex max-w-[75%] flex-col justify-around gap-4 p-4">
              <Image
                src="/assets/logoblack.png"
                width="150"
                height="300"
                alt="logo"
                className="mb-4"
              />
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/phone.png" width="30" height="30" alt="phone icon" />
                <p> +971 043540227 | +971 501382847 | +86 13828402777 </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/mail.png" width="30" height="30" alt="mail icon" />
                <p>info@ifield.ae</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <Image src="/assets/location.png" width="30" height="30" alt="location icon" />
                <p>
                  Office 156, Floor1, European Business Centre Bldg, Dubai Investment Park, Jabel
                  Ali, Dubai, United Arab Emirates, P.O. Box No. 451970
                </p>
              </div>
            </div>
            <div className="mx-auto mb-16 flex flex-col justify-around gap-4 p-4">
              <h2>Subscribe to our newsletter to stay updated</h2>
              <div className="flex flex-row">
                <input className=" relative mx-0 mb-0 rounded" type="text"></input>
                <button className="font-Inter w-[154px] rounded-[0px_4px_4px_0px] bg-[#B91C1C] text-center text-white ">
                  Subscribe
                </button>
              </div>
              <div className="flex justify-around">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About Us</Link>
                <Link href={'/process'}>Our Process</Link>
                <Link href={'/projects'}>Our Projects</Link>
                <Link href={'/contact'}>Contact Us</Link>
              </div>
              <div>
                <Image src="/assets/pattern3.png" width="300" height="30" alt="pattern" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
