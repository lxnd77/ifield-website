import Image from 'next/image'

export default function Process() {
  return (
    <div className="container static mx-auto h-full w-[90%]" data-scroll-section>
      <h1 className="playfair text-[2.4rem] leading-normal md:mt-4 md:text-[4vw]">Our Process</h1>

      <div className="absolute left-[50%] h-full w-1 border-4 border-red-800"></div>
      <div className="right-0 h-[400px]">
        <div className="flex flex-row">
          <div>
            <Image src="/assets/p1.png" alt="pattern" width={100} height={100} />
          </div>
          <div className="m-4 w-[400px] ">
            <h2 className="montserrat text-bold text-2xl">Assessment</h2>
            <p>
              We assess the site and business to ensure clarity on scope and budgeting. We provide
              cost engineering services to ensure the best use of your budget.
            </p>
            <p>
              We'll provide expert recommendations, and full transparency. We make sure you're
              optimizing your budget.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[500px] text-right">
        <div className="flex flex-row">
          <div className="m-4 w-[400px] ">
            <h2 className="montserrat text-bold text-2xl">Design</h2>
            <p>
              Our in-house experts provide AUTOCAD illustrations ensuring precision and consistency.
            </p>
            <p>
              A fine-tuned, collaborative process ensures that the designs are exactly as you want
              them to be. Manufacturing begins only when clients are fully satisfied.
            </p>
          </div>
          <div>
            <Image src="/assets/p1.png" alt="pattern" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="right-0 h-[400px]">
        <div className="flex flex-row">
          <div>
            <Image src="/assets/p1.png" alt="pattern" width={100} height={100} />
          </div>
          <div className="m-4 w-[400px] ">
            <h2 className="montserrat text-bold text-2xl">Procurement</h2>
            <p>
              We work with you to identify and source the ideal materials for your purposes, and
              provide samples to make sure you are fully satisfied.
            </p>
            <p>
              Our sourcing team has access to materials from across the globe and will find you the
              best balance between budget & quality.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[500px] text-right">
        <div className="flex flex-row">
          <div className="m-4 w-[400px] ">
            <h2 className="montserrat text-bold text-2xl">Production</h2>
            <p>
              We source raw materials of the highest quality, and are equipped for the custom
              manufacture and engineering of all FF&E items in our own facilities.
            </p>
            <p>
              From light fixtures and ceiling work, to drapery, furniture, metal and glass work, all
              the way down to carpets, rugs, and flooring, everything is handled in-house.
            </p>
          </div>
          <div>
            <Image src="/assets/p1.png" alt="pattern" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="right-0 h-[400px]">
        <div className="flex flex-row">
          <div>
            <Image src="/assets/p1.png" alt="pattern" width={100} height={100} />
          </div>
          <div className="m-4 w-[400px] ">
            <h2 className="montserrat text-bold text-2xl">Logistics</h2>
            <p>
              We navigate international regulations and provide logistical support to ensure
              seamless transportation.
            </p>
            <p>
              We have over 20 years of experience with managing the intricacies of transporting FF&E
              items internationally, and your experience will be hassle-free.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-[500px] text-right">
        <div className="flex flex-row">
          <div className="m-4 w-[400px] ">
            <h2 className="montserrat text-bold text-2xl">Delivery & Installation</h2>
            <p>
              Our streamlined process delivers your goods on time, in perfect condition, ready for
              installation.
            </p>
            <p>
              Our highly-trained team installs your customized items, and handles fit-out work like
              painting, plastering, tiling and more.
            </p>
          </div>
          <div>
            <Image src="/assets/p1.png" alt="pattern" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  )
}
