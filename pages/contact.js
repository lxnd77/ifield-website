const { default: GlobeSection } = require('@/components/GlobeSection')

const Contact = () => {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.

    const name = event.target.name.value
    const email = event.target.email.value
    const message = event.target.message.value
    sendMail(name, email, message)
  }

  async function sendMail(name, from, message) {
    const data = {
      name: name,
      from: from,
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
        <div className="h-1 w-[20%] bg-red-900 "></div>
        <div className="playfair pl-[1%] text-[2.4rem] text-black md:text-[4vw]">Contact Us</div>
      </div>
      <div className="flex flex-row flex-wrap">
        <GlobeSection />
        <form></form>
      </div>
      <div className="container mx-auto flex w-[90%] flex-row flex-wrap gap-8">
        <div className="w-[300px]">
          <div className="flex flex-row">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Head Office</h2>
          </div>
          <p className="montserrat text-justify">
            1408, 13/F, CEO Tower, 77 Wing Hong Street, Cheung She Wan, Hong Kong
          </p>
        </div>
        <div className="w-[300px]">
          <div className="flex flex-row">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Head Office</h2>
          </div>
          <p className="montserrat text-justify">
            1408, 13/F, CEO Tower, 77 Wing Hong Street, Cheung She Wan, Hong Kong
          </p>
        </div>
        <div className="w-[300px]">
          <div className="flex flex-row">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Head Office</h2>
          </div>
          <p className="montserrat text-justify">
            1408, 13/F, CEO Tower, 77 Wing Hong Street, Cheung She Wan, Hong Kong
          </p>
        </div>
        <div className="w-[300px]">
          <div className="flex flex-row">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Head Office</h2>
          </div>
          <p className="montserrat text-justify">
            1408, 13/F, CEO Tower, 77 Wing Hong Street, Cheung She Wan, Hong Kong
          </p>
        </div>
        <div className="w-[300px]">
          <div className="flex flex-row">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Head Office</h2>
          </div>
          <p className="montserrat text-justify">
            1408, 13/F, CEO Tower, 77 Wing Hong Street, Cheung She Wan, Hong Kong
          </p>
        </div>
        <div className="w-[300px]">
          <div className="flex flex-row">
            <div className="my-auto h-4 w-4 rounded-full bg-red-700"></div>
            <h2 className="playfair text-xl underline">Head Office</h2>
          </div>
          <p className="montserrat text-justify">
            1408, 13/F, CEO Tower, 77 Wing Hong Street, Cheung She Wan, Hong Kong
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
