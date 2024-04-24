import nodemailer from 'nodemailer';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'],
  origin: true, // Reflect the request origin, as defined by 'origin' in CORS options
  credentials: true,
});

// Helper method to initiate CORS and handle OPTIONS request
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { fullName, email, dates, cameras, project, phoneNumber } = req.body;

    const mailOptions = {
      from: email,
      to: 'jethro@thermalvisionresearch.co.uk',
      subject: 'Ecology Kit Enquiry',
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Dates Needed: ${dates}
        Cameras Needed: ${cameras}
        Project Details: ${project}
      `,
    };

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'jethro@thermalvisionresearch.co.uk',
        pass: "ThermalVR2k4"
      },
    });

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
