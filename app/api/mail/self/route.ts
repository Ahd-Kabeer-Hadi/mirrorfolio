import { Resend } from "resend";
import SelfNotificationEmail, { EmailInputs } from "@/emails/SelfNotification";
import { SelfNotificationEmailProps } from "@/emails/SelfNotification";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const requestData: SelfNotificationEmailProps = await request.json();
  const { customerName, email, customerPhone, customerMessage, submittedOn } =
    requestData;
  
  try {
    const { success } =  EmailInputs.safeParse(requestData);

    if (!success) return NextResponse.json({ error: "Invalid data" });

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.NEXT_PUBLIC_RESEND_TEST_MAIL_ID as string,
      subject: "You got a new lead from Mirrorfolio!",
      html: render(
        SelfNotificationEmail({
          customerName,
          email,
          customerPhone,
          customerMessage,
          submittedOn,
        })
      ),
    });

    if (error) {
      console.log(error);
      return NextResponse.json({ error, Success: false });
    }
    return NextResponse.json({
      data,
      Success: true,
      Message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error, Success: false });
  }
}
