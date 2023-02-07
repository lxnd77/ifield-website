const { default: GlobeSection } = require('@/components/GlobeSection')

const Contact = () => {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.

    const name = event.target.name.value
    const email = event.target.email.value
    const company = event.target.company.value
    const message = event.target.message.value
    sendMail(name, email, company, message)
  }

  async function sendMail(name, from, company, message) {
    const data = {
      name: name,
      from: from,
      company: company,
      message: message,
    }

    // Send the form data to our API and get a response.
    const response = await fetch('/api/sendMail', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result)
    alert(result.message)
  }

  return (
    <div data-scroll-section>
      <div className="mb-2 flex items-center ">
        <div className="h-1 w-[10%] bg-red-900 "></div>
        <div className="playfair pl-[1%] text-[2.4rem] text-black md:text-[4vw]">
          Get in touch <br />
          to get your FF&E project to life!
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        <GlobeSection />
        <form onSubmit={handleSubmit} className="my-auto flex w-[600px] flex-col gap-4 p-4 px-8">
          <input
            id="name"
            name="name"
            placeholder="Name"
            className="border-b-2 border-gray-400 py-2 text-gray-600 
            placeholder-gray-400 outline-none
            focus:border-red-800"
          />
          <input
            id="email"
            name="email"
            placeholder="Email"
            className="border-b-2 border-gray-400 py-2 text-gray-600 
            placeholder-gray-400
            focus:border-red-800"
          />
          <input
            id="company"
            name="company"
            placeholder="Company"
            className="border-b-2 border-gray-400 py-2 text-gray-600 
            placeholder-gray-400 outline-none
            focus:border-red-800"
          />
          <input
            id="message"
            name="message"
            placeholder="Message"
            className="border-b-2 border-gray-400 py-2 text-gray-600 
            placeholder-gray-400 outline-none
            focus:border-red-800"
          />
          <button
            type="submit"
            className="justify-right w-32 rounded-full bg-red-800 p-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="container mx-auto my-auto flex flex-col flex-wrap justify-around justify-items-center gap-4 md:h-[400px] ">
        <div className="m-auto w-[300px] p-2">
          <div className="flex flex-row gap-2">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Head Office</h2>
          </div>
          <p className="montserrat pt-2 ">
            1408, 13/F, CEO Tower, 77 Wing Hong Street, Cheung She Wan, Hong Kong
          </p>
        </div>
        <div className="m-auto w-[300px] p-2">
          <div className="flex flex-row gap-2">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">China Office</h2>
          </div>
          <p className="montserrat pt-2 ">
            315, 3rd Floor, DeWei Tower, No.626 Shibai Industrial Road, Panyu District, Guangzhou,
            P.R. China <br /> Tel :+86 20 39232167 / 39232577 / 39232657 | Fax: +86 20 34337465
          </p>
        </div>
        <div className="m-auto w-[300px] p-2">
          <div className="flex flex-row gap-2">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">UAE Office</h2>
          </div>
          <p className="montserrat pt-2 ">
            Office 156, Floor1, European Business Centre Bldg, Dubai Investment Park, Jabel Ali,
            Dubai, United Arab Emirates, P.O. Box No. 451970 <br /> Tel: +971 043540227 | +971
            501382847 | +86 13828402777
          </p>
        </div>
        <div className="m-auto w-[300px] p-2">
          <div className="flex flex-row gap-2">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Nigeria Office</h2>
          </div>
          <p className="montserrat pt-2 ">
            Block 13, Plot 2, Palace Road, VI, Lagos Nigeria <br /> M: +234 9037572893
          </p>
        </div>
        <div className="m-auto w-[300px] p-2">
          <div className="flex flex-row gap-2">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">India Office</h2>
          </div>
          <p className="montserrat pt-2 ">
            E-201, Vaishali Nagar, Near Defence Public School, Jaipur, Rajasthan, India <br />
            M: +91 9887514715
          </p>
        </div>
        <div className="m-auto w-[300px] p-2">
          <div className="flex flex-row gap-2">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Spain Office</h2>
          </div>
          <p className="montserrat pt-2 ">
            C/Forners i Pastissers 1907760 Ciutadella de Menorca <br />
            Tel: +34 971380495 / 676815728
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
