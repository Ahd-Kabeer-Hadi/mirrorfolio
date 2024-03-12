import React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
interface IniatialLeadEmailProps {
  customerName: string;
}
const IniatialLeadEmail = ({ customerName }: IniatialLeadEmailProps) => (
  <Html>
    <Head />

    <Preview>Let's Create something awesome!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            "https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/b4wai5hr/88r/h8k/sjy/logo%20%282%29.png"
          }
          width="262"
          alt="Logo"
          title="Logo"
          style={logo}
        />
        <Text style={paragraph}>Hello {customerName},</Text>
        <Text style={paragraph}>Let's Create something awesome!</Text>
        <Text style={paragraph}>
          Firstly, I want to express my gratitude for considering me as your
          development partner. Together, we can transform your ideas into
          extraordinary products that fulfill your requirements.
        </Text>
        <Text style={paragraph}>
          Are you ready to embark on this journey? Don't hesitate - schedule an
          in-person call with me now. Let's discuss your project over a cup of
          coffee.
        </Text>
        <Button
          href="https://cal.com/ahd-kabeerhadi/coffee-chat"
          style={button}
        >
          Schedule a Call &gt;
        </Button>
      </Container>
    </Body>
  </Html>
);

// Default props for preview
IniatialLeadEmail.PreviewProps = { customerName: "John" };

export default IniatialLeadEmail;

// Styles
const main = {
  backgroundColor: "#FFFFFF",
  fontFamily: "'Roboto', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  backgroundColor: "#1d1d1d",
  borderRadius: "10px",
} as React.CSSProperties;

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#555555",
  textAlign: "center",
  padding: "0 25px",
} as React.CSSProperties;

// const h1 = {
//     color: "#B1AED1",;
//     font-family: 'Poppins', Arial, Helvetica, sans-serif;
//     size: 20px;
//     line-height: 120%;
//     text-align: center;
//     mso-line-height-alt: 24px;
    
//   } as React.CSSProperties;
  

const button = {
  backgroundColor: "#555555",
  color: "#FFFFFF",
  borderRadius: "50px",
  display: "inline-block",
  padding: "10px 20px",
  textDecoration: "none",
  marginTop: "20px",
};
const commonStyles = {
    boxSizing: "border-box",
  };
  
  const bodyStyles = {
    margin: "0",
    padding: "0",
  };
  
  const appleDataDetectorsStyles = {
    color: "inherit !important",
    textDecoration: "inherit !important",
  };
  
  const messageViewBodyStyles = {
    color: "inherit",
    textDecoration: "none",
  };
  
  const pStyles = {
    lineHeight: "inherit",
  };
  
  const desktopHideStyles = {
    msoHide: "all",
    display: "none",
    maxHeight: "0px",
    overflow: "hidden",
  };
  
  const imageBlockStyles = {
    display: "none",
  };
  
  const mediaStyles = {
    socialBlockDesktopHideSocialTable: {
      display: "inline-block !important",
    },
    mobileHide: {
      display: "none",
      minHeight: "0",
      maxHeight: "0",
      maxWidth: "0",
      overflow: "hidden",
      fontSize: "0px",
    },
    rowContent: {
      width: "100% !important",
    },
    stackColumn: {
      width: "100%",
      display: "block",
    },
    desktopHideTable: {
      display: "table !important",
      maxHeight: "none !important",
    },
  };
  
  // Usage example:
  // <div style={{ ...commonStyles, ...bodyStyles }}>Your content here</div>
  