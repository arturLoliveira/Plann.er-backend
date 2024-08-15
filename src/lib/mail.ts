import nodemailer from 'nodemailer'
import { env } from 'process'


export async function getMailClient() {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.SMTP_USER,
      pass: env.SMPT_PASS,
    },
  })

  return transporter
}
