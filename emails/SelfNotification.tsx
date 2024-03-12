import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { z } from "zod";

export const EmailInputs = z.object({
  customerName: z.string(),
  email: z.string(),
  customerPhone: z.string().optional(),
  customerMessage: z.string(),
  submittedOn: z.string(),
});

export type SelfNotificationEmailProps = z.infer<typeof EmailInputs>;


const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SelfNotificationEmail = ({
  customerName,
  email,
  customerPhone,
  customerMessage,
  submittedOn,
}: SelfNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>You got a new lead. We're so excited to get it!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={"https://mirrorfolio.vercel.app/_next/static/media/logo.91ac1352.svg"}
          width="170"
          height="50"
          alt="Mirrorfolio Logo"
          style={logo}
        />
        <Text style={paragraph}>Yo Hadi,</Text>
        <Text style={paragraph}>
          You got a new lead. We're so excited to get it!
        </Text>
        <Text style={paragraph}>
          Here is the summary of the lead:
          <Text style={paragraph}> From: {customerName} ,</Text>
          <Text style={paragraph}> on: {submittedOn}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>
            Phone: {customerPhone ? customerPhone : "N/A"}
          </Text>
          <Text style={paragraph}>
            {" "}
            Message: {customerMessage ? customerMessage : "N/A"}
          </Text>
        </Text>
      </Container>
    </Body>
  </Html>
);

SelfNotificationEmail.PreviewProps = {
  customerName: "Alan",
} as SelfNotificationEmailProps;

export default SelfNotificationEmail;

const main = {
  backgroundColor: "#1d1d1d",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#fff",
};
