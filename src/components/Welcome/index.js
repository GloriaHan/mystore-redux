import React from "react";
import { useNavigate } from "react-router-dom";
import { Root } from "./Welcome.style";
import Button from "@mui/material/Button";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Root>
      <h1> Homepage</h1>
      <h2>WELCOME TO MYSTORE !</h2>
      <h3>It's time to treat yourself.</h3>
      <div>
        <Button
          onClick={() => {
            navigate(`/mystore/products`);
          }}
          variant="contained"
          size="large"
        >
          Shopping Now
        </Button>
      </div>
    </Root>
  );
}
