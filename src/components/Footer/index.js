import React from "react";
import { Root, Img, Paymethods, SocialMedia, ContactUs } from "./Footer.style";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
export default function Footer() {
  return (
    <Root>
      <Paymethods>
        <span>Payment methods: &nbsp;</span>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/39/39196.png"
          alt="visa"
        ></Img>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/349/349237.png"
          alt="JCB"
        ></Img>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/349/349247.png"
          alt="paypal"
        ></Img>
        <Img
          src="https://cdn-icons-png.flaticon.com/128/493/493771.png"
          alt="AMEX"
        ></Img>
      </Paymethods>
      <SocialMedia>
        <span>Like us? &nbsp;</span>
        <ThumbUpOffAltIcon />
        &nbsp; &nbsp;
        <Img
          src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
          alt="facebook"
        ></Img>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
          alt="instagram"
        ></Img>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/1409/1409937.png"
          alt="twitter"
        ></Img>
        <Img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968812.png"
          alt="ticktok"
        ></Img>
      </SocialMedia>

      <ContactUs sx={{ "& button": { m: 1 } }}>
        <Button variant="contained" size="small">
          Contact Us
        </Button>
      </ContactUs>
    </Root>
  );
}
