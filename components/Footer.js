import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 max-h-[540px] w-full" data-scroll-section>
        <hr className="m-auto w-[80%] border-t-2 border-red-700" />
        <div className="mx-auto mx-auto mt-16 flex flex-row md:w-[70%]">
          <div className="flex flex-col justify-around">
            <img src="assets/logoblack.png" width="196px" />
            <div className="flex flex-row">
              <img src="assets/phone.png" />
              <p>+86-20-39232167 / 39232577 / 39232657 </p>
            </div>
            <div className="flex flex-row">
              <img src="assets/mail.png" />
              <p>info@ifield.com.cn</p>
            </div>
            <div className="flex flex-row">
              <img src="assets/location.png" />
              <p>
                5th Fl, Building A, Daxin Industrial Park, No.3 Kaifa Dong RD, Xishan Village,
                Luopu, Panyu District, Guangzhou, Peoples Republic of China
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-around">
            <h2>Subscribe to our newsletter to stay updated</h2>
            <div className="flex flex-row">
              <input className=" relative mx-0 mb-0 rounded" type="text"></input>
              <button className="font-Inter w-[154px] rounded-[0px_4px_4px_0px] bg-[rgb(58,79,57)] text-center text-white ">
                Subscribe
              </button>
            </div>
            <div className="flex justify-around">
              <a>Home</a>
              <a>About Us</a>
              <a>Projects</a>
              <a>Services</a>
              <a>Contact</a>
            </div>
            <div>
              <img src="assets/pattern3.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
