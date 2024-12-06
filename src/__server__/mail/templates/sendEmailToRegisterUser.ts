export const sendEmailToRegisterUser = (userName: string, courseName: string, city: string,) => `
<!doctype html>
<html>
  <body>
    <div
      style='background-color:#F2F5F7;color:#262626;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:0 0;min-height:100%;width:100%'
    >
      <table
        width="50%"
        style="margin:0 auto;max-width:600px;background-color:#ffffff"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div
                style="padding:16px 20px 16px 20px;background-color:#F2F5F7;text-align:center"
              >
                <img
                  alt="KB & EBCOG Logo"
                  src="https://mailer.partnrx.com/uploads/Frame-1000016599_vfDH4F.png"
                  style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div style="padding:0px 0px 0px 0px;background-color:#ffffff">
                <img
                  alt="EBCOG Course Acknowledgement Banner"
                  src="https://mailer.partnrx.com/uploads/Frame-1000016597_6eSzSN.png"
                  style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
              <div
                style='background-color:#ffffff;font-size:18px;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-weight:bold;text-align:left;padding:12px 40px 8px 40px'
              >
                ${userName},
              </div>
              <div
                style='background-color:#ffffff;font-size:16px;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-weight:normal;padding:0px 40px 8px 40px'
              >
                Thank you for submitting your enrolment details for our
                prestigious EBCOG Diploma’s. We have successfully received your
                application and are thrilled about your interest in advancing
                your expertise.
              </div>
              <div
                style='background-color:#ffffff;font-size:16px;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-weight:normal;padding:0px 40px 16px 40px'
              >
                Our team is currently reviewing your submission, and we will get
                back to you within 24 hours with the next steps.
              </div>
              <div style="background-color:#ffffff;padding:16px 40px 16px 40px">
                <div
                  style="background-color:#ffffff;border:1px solid #f0f0f0;border-radius:0;padding:20px 20px 20px 20px"
                >
                  <div
                    style='background-color:#FFF4F8;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-size:16px;padding:20px 24px 4px 24px'
                  >
                    <span><b>Your selected diploma of interest :</b></span>
                    ${courseName}
                  </div>
                  <div
                    style='background-color:#FFF4F8;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-size:16px;padding:12px 24px 4px 24px'
                  >
                    <span><b>Course Dates :</b></span> February 14th-19th, 2025
                  </div>
                  <div
                    style='background-color:#FFF4F8;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-size:16px;padding:12px 24px 4px 24px'
                  >
                    <span><b>City :</b></span> ${city}
                  </div>
                  <div
                    style='background-color:#FFF4F8;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-size:16px;padding:12px 24px 4px 24px'
                  >
                    <span><b>Format :</b></span> In person, 40 Lectures,
                    extensive hands-on training and online in-person assessment
                  </div>
                  <div
                    style='background-color:#FFF4F8;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-size:16px;padding:12px 24px 20px 24px'
                  >
                    <span><b>Course Time :</b></span> 8:30hrs to 17:30hrs
                  </div>
                </div>
              </div>
              <div
                style='background-color:#ffffff;font-size:16px;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-weight:normal;padding:4px 40px 0px 40px'
              >
                Warm regards,
              </div>
              <div
                style='background-color:#ffffff;font-size:16px;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-weight:bold;padding:0px 40px 16px 40px'
              >
                Team EBCOG-EIPMS
              </div>
              <div
                style="background-color:#ffffff;text-align:left;padding:8px 40px 16px 40px"
              >
                <a
                  href="https://test.ebcog.sudors.in/"
                  style="color:#FFFFFF;font-size:15px;font-weight:bold;background-color:#E4087F;border-radius:64px;display:inline-block;padding:8px 12px;text-decoration:none"
                  target="_blank"
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 12px;mso-font-width:-100%;mso-text-raise:18"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ><span>Visit Our Website</span
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 12px;mso-font-width:-100%"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ></a
                >
              </div>
              <div style="padding:16px 0px 0px 0px;background-color:#ffffff">
                <hr
                  style="width:100%;border:none;border-top:1px solid #ebebeb;margin:0"
                />
              </div>
              <div
                style='color:#888888;background-color:#ffffff;font-size:14px;font-family:Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif;font-weight:normal;padding:8px 40px 8px 40px'
              >
                <p>
                  Should you have any questions in the meantime, please feel
                  free to reach out to us at
                  <a href="mailto:contact@ebcogdiplomas.com" target="_blank"
                    >contact@ebcogdiplomas.com</a
                  >
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`