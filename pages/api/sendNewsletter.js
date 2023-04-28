import Cors from 'cors'
import Mailjet from 'node-mailjet'

export default async function sendNewsLetter(req, res) {
  const cors = Cors({
    methods: ['POST'],
  })
  const mailjet = new Mailjet.apiConnect(
    process.env.NEXT_PUBLIC_MJ_APIKEY_PUBLIC,
    process.env.NEXT_PUBLIC_MJ_APIKEY_SECRET,
    {
      config: { timeout: 1000, maxBodyLength: 1500, maxContentLength: 100 },
      options: {},
    }
  )
  const body = req.body
  console.log('body: ', body)

  function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }

        return resolve(result)
      })
    })
  }
  await runMiddleware(req, res, cors)

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'rishabh.bh7@gmail.com',
          Name: 'I Field',
        },
        To: [
          {
            Email: 'rishabh.bh7@gmail.com',
            Name: 'Admin',
          },
        ],
        Subject: 'Newsletter Signup from Ifield website',
        TextPart: 'IFIELD.AE \n' + body.newsletterEmail + '\n Newsetter Signup! ',
      },
    ],
  })

  request
    .then((result) => {
      console.log(result.body)
      res.status(200).json({ message: 'Message Sent Successfully' })
    })
    .catch((err) => {
      console.log(err.statusCode)
      res.status(err.statusCode).json({ message: 'error' })
    })
}
