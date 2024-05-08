"use server"
import { EmailInputs } from "@/components/Forms/ContactForm";
import { compileWelcomeTemplate } from "@/emails/templates/welcome";
import nodemailer from "nodemailer";
import { z } from "zod";

export default async function sendMail({
  customerMessage,
  customerName,
  email,
  customerPhone,
  submittedOn,
}: z.infer<typeof EmailInputs>) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  // Uncomment to verify transport configuration
  // try {
  //   await transport.verify();
  // } catch (error) {
  //   console.error("Transport verification failed:", error);
  //   throw error;
  // }
  try {
    await transport.sendMail({
        from: SMTP_EMAIL,
        to: SMTP_EMAIL,
        subject: "You got a new lead!",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Lead Notification</title>
          </head>
          <body>
            <div style="font-family: Arial, sans-serif;text-align: center; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="font-size: 24px; margin-bottom: 10px;">You have a new lead!</h2>
              <p><strong>Name:</strong> ${customerName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${customerPhone}</p>
              <p><strong>Message:</strong> ${customerMessage}</p>
              <p><strong>Submitted on:</strong> ${submittedOn}</p>
            </div>
          </body>
          </html>
        `,
      });
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: email,
      subject: "Welcome to Mirrorfolio!",
      html: compileWelcomeTemplate(customerName),
    });



    if (sendResult.accepted[0] === email) {
      return true;
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}
