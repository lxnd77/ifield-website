import Image from 'next/image'

export default function Process() {
  return (
    <div className="container static mx-auto h-full w-[90%]" data-scroll-section id="cont">
      <h1 className="playfair text-[2.4rem] leading-normal md:mt-4 md:text-[4vw]">Our Process</h1>
      <div>
        <Image
          className="mt-4"
          src="/assets/processHero100.png"
          alt="heroImage"
          width={1920}
          height={200}
        />
      </div>

      {/* ---------- Assessment ------------ */}
      <div className="my-[10vw] mt-8 flex flex-row items-center ">
        <div className="absolute left-[2.5%] z-10 w-12 translate-x-[-50%] bg-white lg:left-[50%] xl:w-[100px]">
          <Image src="/assets/single-pattern/1.svg" alt="pattern" width={100} height={100} />
        </div>

        <div className="ml-16 flex w-full flex-col justify-between gap-4 lg:ml-0 lg:flex-row lg:items-center">
          <div className="lg:m-4 lg:w-[400px] lg:text-right ">
            <Image
              className="my-8"
              src="/assets/process/Asset 2.svg"
              alt="assetmentImage"
              width={400}
              height={100}
            />
            {/* ======================= Mid Line ================== */}
            <div className="absolute left-[2%] z-0 h-[92%] w-1 bg-gray-800 lg:left-[50%] lg:h-[80%] lg:translate-x-[-50%]"></div>
            {/* ======================= End of Mid Line ================== */}
            <h2 className="montserrat text-bold my-4 text-4xl">Assessment</h2>
            <p>
              We assess the site and business to ensure clarity on scope and budgeting. We provide
              cost engineering services to ensure the best use of your budget.
            </p>
            <p>
              We'll provide expert recommendations, and full transparency. We make sure you're
              optimizing your budget.
            </p>
          </div>
          <div className="lg:w-[400px]">
            <ul className="ml-4 list-disc ">
              <li className="mb-2"> On-Site Assessments </li>
              <li className="mb-2"> On-Site Measurement </li>
              <li className="mb-2"> Customized Solutions </li>
              <li className="mb-2">Specialists in Residential and Commercial Hospitality </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Design ------------ */}
      <div className="my-[20vw] flex flex-row items-center">
        <div className="absolute left-[2.5%] w-12 translate-x-[-50%] bg-white lg:left-[50%] xl:w-[100px]">
          <Image src="/assets/single-pattern/2.svg" alt="pattern" width={100} height={100} />
        </div>
        <div className="ml-16 flex w-full flex-col justify-between gap-4 lg:ml-0 lg:flex-row lg:items-center">
          <div className="lg:m-4 lg:w-[400px] lg:text-right ">
            <Image
              className="my-8"
              src="/assets/process/Asset 3.svg"
              alt="assetmentImage"
              width={400}
              height={100}
            />
            <h2 className="montserrat text-bold my-4 text-4xl">Design</h2>
            <p>
              Our in-house experts provide AUTOCAD illustrations ensuring precision and consistency.
            </p>
            <p>
              A fine-tuned, collaborative process ensures that the designs are exactly as you want
              them to be. Manufacturing begins only when clients are fully satisfied.
            </p>
          </div>
          <div className="lg:w-[400px]">
            <ul className="ml-4 list-disc">
              <li className="mb-2"> AUTOCAD expertise</li>
              <li className="mb-2"> Design Consultation</li>
              <li className="mb-2"> Production drawing</li>
            </ul>
          </div>
        </div>
      </div>
      {/* -----------Procurement--------- */}
      <div className="my-[20vw] flex flex-row items-center">
        <div className="absolute left-[2.5%] w-12 translate-x-[-50%] bg-white lg:left-[50%] xl:w-[100px]">
          <Image src="/assets/single-pattern/3.svg" alt="pattern" width={100} height={100} />
        </div>
        <div className="ml-16 flex w-full flex-col justify-between gap-4 lg:ml-0 lg:flex-row lg:items-center">
          <div className=" lg:m-4 lg:w-[400px] lg:text-right">
            <Image
              className="my-8"
              src="/assets/process/Asset 4.svg"
              alt="assetmentImage"
              width={400}
              height={100}
            />
            <h2 className="montserrat text-bold my-4 text-4xl">Procurement</h2>
            <p>
              We work with you to identify and source the ideal materials for your purposes, and
              provide samples to make sure you are fully satisfied.
            </p>
            <p>
              Our sourcing team has access to materials from across the globe and will find you the
              best balance between budget & quality.
            </p>
          </div>
          <div className="lg:w-[400px]">
            <ul className="ml-4 list-disc">
              <li className="mb-2"> Sourcing</li>
              <li className="mb-2"> Material selection</li>
              <li className="mb-2"> Sample submission</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---------Production------------  */}
      <div className="my-[20vw] flex flex-row items-center">
        <div className="absolute left-[2.5%] w-12 translate-x-[-50%] bg-white lg:left-[50%] xl:w-[100px]">
          <Image src="/assets/single-pattern/4.svg" alt="pattern" width={100} height={100} />
        </div>
        <div className="ml-16 flex w-full flex-col justify-between gap-4 lg:ml-0 lg:flex-row lg:items-center">
          <div className="lg:m-4 lg:w-[400px] lg:text-right ">
            <Image
              className="my-8"
              src="/assets/process/Asset 5.svg"
              alt="assetmentImage"
              width={400}
              height={100}
            />
            <h2 className="montserrat text-bold my-4 text-4xl">Production</h2>
            <p>
              We source raw materials of the highest quality, and are equipped for the custom
              manufacture and engineering of all FF&E items in our own facilities.
            </p>
            <p>
              From light fixtures and ceiling work, to drapery, furniture, metal and glass work, all
              the way down to carpets, rugs, and flooring, everything is handled in-house.
            </p>
          </div>
          <div className="lg:w-[400px]">
            <ul className="ml-4 list-disc">
              <li className="mb-2"> In-House Manufacture</li>
              <li className="mb-2"> Lighting and fixtures</li>
              <li className="mb-2"> Furniture</li>
              <li className="mb-2"> Doors</li>

              <li className="mb-2 mt-8"> Upholstery</li>
              <li className="mb-2"> Drapery</li>
              <li className="mb-2"> Flooring</li>
              <li className="mb-2"> Carpets</li>

              <li className="mb-2 mt-8"> Woodwork</li>
              <li className="mb-2"> Metalwork</li>
              <li className="mb-2"> Glasswork</li>
              <li className="mb-2">Stonework</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---------------Logistics------------ */}
      <div className="my-[20vw] flex flex-row items-center">
        <div className="absolute left-[2.5%] w-12 translate-x-[-50%] bg-white lg:left-[50%] xl:w-[100px]">
          <Image src="/assets/single-pattern/5.svg" alt="pattern" width={100} height={100} />
        </div>
        <div className="ml-16 flex w-full flex-col justify-between gap-4 lg:ml-0 lg:flex-row lg:items-center">
          <div className="lg:m-4 lg:w-[400px] lg:text-right ">
            <Image
              className="my-8"
              src="/assets/process/Asset 6.svg"
              alt="assetmentImage"
              width={400}
              height={100}
            />
            <h2 className="montserrat text-bold my-4 text-4xl">Logistics</h2>
            <p>
              We navigate international regulations and provide logistical support to ensure
              seamless transportation.
            </p>
            <p>
              We have over 20 years of experience with managing the intricacies of transporting FF&E
              items internationally, and your experience will be hassle-free.
            </p>
          </div>
          <div className="lg:w-[400px]">
            <ul className="ml-4 list-disc">
              <li className="mb-2"> Packaging and Shipping</li>
              <li className="mb-2">Certifications</li>
              <li className="mb-2"> Regulation adherence</li>
              <li className="mb-2"> Shipping schedules</li>
              <li className="mb-2"> Consultation</li>
            </ul>
          </div>
        </div>
      </div>
      {/* -------------- Delivery & Installation--------- */}
      <div className="z-10 mt-[20vw] mb-[10vw] flex flex-row items-center">
        <div className="absolute left-[2.5%] w-12 translate-x-[-50%] bg-white lg:invisible lg:left-[50%] xl:w-[100px]">
          <Image src="/assets/single-pattern/6.svg" alt="pattern" width={100} height={100} />
        </div>
        <div className="z-10 ml-16 flex w-full flex-col justify-between gap-4  bg-white  lg:ml-0 lg:items-center">
          <div className="lg:m-4 lg:w-[400px] ">
            <Image
              className="my-8"
              src="/assets/process/Asset 7.svg"
              alt="assetmentImage"
              width={400}
              height={100}
            />
            <h2 className="montserrat text-bold my-4 text-4xl">Delivery & Installation</h2>
            <p>
              Our streamlined process delivers your goods on time, in perfect condition, ready for
              installation.
            </p>
            <p>
              Our highly-trained team installs your customized items, and handles fit-out work like
              painting, plastering, tiling and more.
            </p>
          </div>
          <div className="lg:w-[400px]">
            <ul className="ml-4 list-disc">
              <li className="mb-2"> Expert in-house team</li>
              <li className="mb-2"> Full fit-out</li>
              <li className="mb-2"> Ceilings, walls, and hard finishes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
