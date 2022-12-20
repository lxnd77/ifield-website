import Cors from 'cors'
import Mailjet from 'node-mailjet'

export default async function sendMail(req, res) {
  const cors = Cors({
    methods: ['POST'],
  })
  const mailjet = new Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_SECRET,
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
          Name: body.name,
        },
        To: [
          {
            Email: 'rishabh.bh7@gmail.com',
            Name: 'Admin',
          },
        ],
        Subject: 'New Communication from ifield website',
        TextPart: body.message + ' FROM ' + body.from,
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
