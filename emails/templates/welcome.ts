import sign from "@/public/sign.svg";
import hi from "@/public/mailTemplate/hi.png";
import linkedin from "@/public/mailTemplate/linkedin.png";
import twitter from "@/public/mailTemplate/twitter.png";
import instagram from "@/public/mailTemplate/instagram.png";


import * as handlebars from "handlebars";

export const compileWelcomeTemplate = (name: string) => {
    const template = handlebars.compile(welcomeMailTemplate);
    const htmlBody = template({ name : name});
    return htmlBody;
}

export const welcomeMailTemplate = `<!DOCTYPE html>

<html
  lang="en"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:PixelsPerInch>96</o:PixelsPerInch
          ><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@100;200;300;400;500;600;700;800;900"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }

      p {
        line-height: inherit;
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0px;
        overflow: hidden;
      }

      .image_block img + div {
        display: none;
      }

      @media (max-width: 670px) {
        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important;
        }

        .icons-inner {
          text-align: center;
        }

        .icons-inner td {
          margin: 0 auto;
        }

        .mobile_hide {
          display: none;
        }

        .row-content {
          width: 100% !important;
        }

        .stack .column {
          width: 100%;
          display: block;
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }

        .row-1 .column-1 .block-3.spacer_block {
          height: 1px !important;
        }

        .row-1 .column-1 .block-1.spacer_block {
          height: 10px !important;
        }

        .row-1 .column-1 .block-2.image_block td.pad {
          padding: 30px 60px !important;
        }

        .row-1 .column-1 .block-6.spacer_block,
        .row-1 .column-1 .block-8.spacer_block {
          height: 25px !important;
        }

        .row-1 .column-1 .block-5.heading_block h3 {
          text-align: center !important;
        }

        .row-1 .column-1 .block-5.heading_block h3 {
          font-size: 16px !important;
        }

        .row-1 .column-1 .block-7.heading_block h2 {
          text-align: center !important;
          font-size: 32px !important;
        }

        .row-1 .column-1 .block-7.heading_block td.pad {
          padding: 0 30px 30px !important;
        }

        .row-1 .column-1 .block-9.heading_block td.pad {
          padding: 0 30px 5px !important;
        }

        .row-1 .column-1 .block-9.heading_block h2 {
          font-size: 24px !important;
        }

        .row-1 .column-1 .block-10.paragraph_block td.pad > div {
          font-size: 12px !important;
        }

        .row-1 .column-1 .block-10.paragraph_block td.pad {
          padding: 30px 30px 20px !important;
        }

        .row-3 .column-1 .block-4.paragraph_block td.pad > div {
          font-size: 14px !important;
        }
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      background-color: #000000;
      padding: 0;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
    "
  >
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #000000;
      "
      width="100%"
    >
      <tbody>
        <tr>
          <td>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-1"
              role="presentation"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background-color: #000000;
                background-size: auto;
              "
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-size: auto;
                        background-color: #000000;
                        color: #000000;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1 mobile_hide"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                             
                            </div>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 60px;
                                    padding-top: 30px;
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 162.5px">
                                      <a
                                        href="https://www.mirrorfolio.com/"
                                        style="outline: none"
                                        tabindex="-1"
                                        target="_blank"
                                        ><img
                                          alt="Mirrorfolio"
                                          height="auto"
                                          src="https://www.mirrorfolio.com/_next/static/media/full-logo.55e6ec04.svg"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 100%;
                                          "
                                          title="Mirrorfolio"
                                          width="162.5"
                                      /></a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-3 mobile_hide"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                             
                            </div>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-4"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 97.5px">
                                      <img
                                        height="auto"
                                        src="${hi}"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        width="97.5"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-5"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Nunito', Arial,
                                        'Helvetica Neue', Helvetica, sans-serif;
                                      font-size: 24px;
                                      font-weight: 500;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 28.799999999999997px;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >{{name}}</span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-6"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                             
                            </div>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="heading_block block-7"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 30px;
                                    text-align: center;
                                    width: 100%;
                                  "
                                >
                                  <h2
                                    style="
                                      margin: 0;
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Nunito', Arial,
                                        'Helvetica Neue', Helvetica, sans-serif;
                                      font-size: 30px;
                                      font-weight: 600;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 36px;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >Thank you for reaching out!</span
                                    >
                                  </h2>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-8"
                              style="
                                height: 30px;
                                line-height: 30px;
                                font-size: 1px;
                              "
                            >
                             
                            </div>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="heading_block block-9"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 5px;
                                    text-align: center;
                                    width: 100%;
                                  "
                                >
                                  <h2
                                    style="
                                      margin: 0;
                                      color: #f5f5f5;
                                      direction: ltr;
                                      font-family: 'Nunito', Arial,
                                        'Helvetica Neue', Helvetica, sans-serif;
                                      font-size: 30px;
                                      font-weight: 700;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 36px;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >I'm eager to connect and discuss how I
                                      can assist you.</span
                                    >
                                  </h2>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-10"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 20px;
                                    padding-top: 60px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Nunito', Arial,
                                        'Helvetica Neue', Helvetica, sans-serif;
                                      font-size: 18px;
                                      font-weight: 600;
                                      letter-spacing: 0px;
                                      line-height: 150%;
                                      text-align: center;
                                      mso-line-height-alt: 27px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      While I prepare to get in touch with you
                                      shortly, why not take advantage of a free
                                      30-minute consultation? 
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="button_block block-11"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 15px;
                                    text-align: center;
                                  "
                                >
                                  <div align="center" class="alignment">
                                    <!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://cal.com/ahd-kabeerhadi/free-consultation" style="height:52px;width:188px;v-text-anchor:middle;" arcsize="20%" stroke="false" fillcolor="#ffffff">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#000000; font-family:Arial, sans-serif; font-size:16px">
<!
                                    [endif]--><a
                                      href="https://cal.com/ahd-kabeerhadi/free-consultation"
                                      style="
                                        text-decoration: none;
                                        display: inline-block;
                                        color: #000000;
                                        background-color: #ffffff;
                                        border-radius: 10px;
                                        width: auto;
                                        border-top: 0px solid transparent;
                                        font-weight: 400;
                                        border-right: 0px solid transparent;
                                        border-bottom: 0px solid transparent;
                                        border-left: 0px solid transparent;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        font-family: 'Nunito', Arial,
                                          'Helvetica Neue', Helvetica,
                                          sans-serif;
                                        font-size: 16px;
                                        text-align: center;
                                        mso-border-alt: none;
                                        word-break: keep-all;
                                      "
                                      target="_blank"
                                      ><span
                                        style="
                                          padding-left: 25px;
                                          padding-right: 25px;
                                          font-size: 16px;
                                          display: inline-block;
                                          letter-spacing: normal;
                                        "
                                        ><span
                                          style="
                                            word-break: break-word;
                                            line-height: 32px;
                                          "
                                          >Book your slot now</span
                                        ></span
                                      ></a
                                    >><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-2"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #000000;
                        border-radius: 0;
                        color: #000000;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <div
                              class="spacer_block block-1"
                              style="
                                height: 35px;
                                line-height: 35px;
                                font-size: 1px;
                              "
                            >
                             
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="heading_block block-2"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <h3
                                    style="
                                      margin: 0;
                                      color: #f8f8f8;
                                      direction: ltr;
                                      font-family: 'Courier New', Courier,
                                        'Lucida Sans Typewriter',
                                        'Lucida Typewriter', monospace;
                                      font-size: 12px;
                                      font-weight: 400;
                                      letter-spacing: normal;
                                      line-height: 120%;
                                      text-align: center;
                                      margin-top: 0;
                                      margin-bottom: 0;
                                      mso-line-height-alt: 14.399999999999999px;
                                    "
                                  >
                                    <span class="tinyMce-placeholder"
                                      >Once again thank you for choosing me.<br />with
                                      love</span
                                    >
                                  </h3>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="row row-3"
              role="presentation"
              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
              width="100%"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      class="row-content stack"
                      role="presentation"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        background-color: #000000;
                        border-radius: 0;
                        color: #000000;
                        width: 650px;
                        margin: 0 auto;
                      "
                      width="650"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 5px;
                              padding-top: 5px;
                              vertical-align: top;
                              border-top: 0px;
                              border-right: 0px;
                              border-bottom: 0px;
                              border-left: 0px;
                            "
                            width="100%"
                          >
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="image_block block-1"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    width: 100%;
                                    padding-right: 0px;
                                    padding-left: 0px;
                                  "
                                >
                                  <div
                                    align="center"
                                    class="alignment"
                                    style="line-height: 10px"
                                  >
                                    <div style="max-width: 130px">
                                      <img
                                        height="auto"
                                        src="${sign}"
                                        style="
                                          display: block;
                                          height: auto;
                                          border: 0;
                                          width: 100%;
                                        "
                                        width="130"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <div
                              class="spacer_block block-2"
                              style="
                                height: 60px;
                                line-height: 60px;
                                font-size: 1px;
                              "
                            >
                             
                            </div>
                            <table
                              border="0"
                              cellpadding="10"
                              cellspacing="0"
                              class="social_block block-3"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="social-table"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        display: inline-block;
                                      "
                                      width="108px"
                                    >
                                      <tr>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.linkedin.com/in/ahd-kabeer/"
                                            target="_blank"
                                            ><img
                                              alt="Linkedin"
                                              height="auto"
                                              src="${linkedin}"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="linkedin"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://www.instagram.com/mirrorfolio"
                                            target="_blank"
                                            ><img
                                              alt="Instagram"
                                              height="auto"
                                              src="${instagram}"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="instagram"
                                              width="32"
                                          /></a>
                                        </td>
                                        <td style="padding: 0 2px 0 2px">
                                          <a
                                            href="https://twitter.com/intent/tweet?url=https://twitter.com/Ahd_Kabeerpi"
                                            target="_blank"
                                            ><img
                                              alt="X"
                                              height="auto"
                                              src="${twitter}"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                              "
                                              title="X"
                                              width="32"
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-4"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td class="pad" style="padding-bottom: 5px">
                                  <div
                                    style="
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: 'Courier New', Courier,
                                        'Lucida Sans Typewriter',
                                        'Lucida Typewriter', monospace;
                                      font-size: 16px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 150%;
                                      text-align: center;
                                      mso-line-height-alt: 24px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      Mirrorfolio<br />2024 © All rights
                                      reserved
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              class="paragraph_block block-5"
                              role="presentation"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                word-break: break-word;
                              "
                              width="100%"
                            >
                              <tr>
                                <td
                                  class="pad"
                                  style="
                                    padding-bottom: 5px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                  "
                                >
                                  <div
                                    style="
                                      color: #ffffff;
                                      direction: ltr;
                                      font-family: Helvetica Neue, Helvetica,
                                        Arial, sans-serif;
                                      font-size: 12px;
                                      font-weight: 400;
                                      letter-spacing: 0px;
                                      line-height: 180%;
                                      text-align: center;
                                      mso-line-height-alt: 21.6px;
                                    "
                                  >
                                    <p style="margin: 0">
                                      <a
                                        href="http://example.com"
                                        rel="noopener"
                                        style="
                                          text-decoration: none;
                                          color: #737172;
                                        "
                                        target="_blank"
                                        >Unsuscribe</a
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
           
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>
`;


