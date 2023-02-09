import Image from 'next/image'

export default function TimelineSection({ year, month, text, pic }) {
  return (
    <div className="relative mx-auto flex w-[80%] flex-row p-4">
      <h2 className="playfair absolute m-4 h-fit w-fit origin-right -rotate-90 text-6xl font-bold">
        {year.toString()}
      </h2>
      <div className="my-8 flex w-full flex-col bg-[#191919]  text-white">
        <Image
          width={500}
          height={500}
          src={pic.toString()}
          className="mx-auto h-[202px] w-[536px] object-cover"
          alt=""
        />

        <div className="mx-auto flex flex-row ">
          <div>
            <h3 className="montserrat my-4 text-xl font-bold">{month.toString()}</h3>
            <p className="montserrat my-4 text-xl md:w-[50%]">{text.toString()}</p>
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
