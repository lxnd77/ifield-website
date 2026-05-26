import Image from 'next/image'

export default function TimelineSection({ year, month, text, pic }) {
  return (
    <div className="relative mx-auto flex w-[80%] flex-row p-4">
      <h2 className="playfair absolute m-4 h-fit w-fit origin-right text-6xl font-bold md:-rotate-90">
        {year.toString()}
      </h2>
      <div className="flex w-full flex-col bg-[#191919] text-white  md:my-8">
        <Image
          width={500}
          height={500}
          src={pic.toString()}
          className="mx-auto h-[202px] w-[536px] object-cover"
          alt=""
        />

        <div className="mb-4 flex flex-row justify-between">
          <div>
            <h3 className="montserrat my-4 text-xl font-bold">{month.toString()}</h3>
            <p className="montserrat my-4 text-xl md:w-[80%]">{text.toString()}</p>
          </div>
          <Image
            width={500}
            height={500}
            src="/assets/pattern1.png"
            className="m-8 hidden h-32 w-32 md:block"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
