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
    <div>
      <div className="mb-2 flex items-center " data-scroll-section>
        <div className="h-1 w-[20%] bg-red-900 "></div>
        <div className="playfair pl-[1%] text-[2.4rem] text-black md:text-[4vw]">Contact Us</div>
      </div>
      <GlobeSection />
    </div>
  )
}

export default Contact
