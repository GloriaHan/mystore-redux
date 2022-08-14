import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Img,
  Root,
  SearchBar,
  StyledButton,
  ShoppingCart,
  CartButton,
} from "./Header.style";
import shoppinglogo from "../../assets/image/shoppinglogo.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import { CartContext, InputContext } from "../App/index";

export default function Header() {
  const { productsInCart } = useContext(CartContext);
  const { inputValue, setInputValue } = useContext(InputContext);
  const navigate = useNavigate();
  const productsQty =
    productsInCart.length > 0
      ? productsInCart.reduce((a, b) => a + b.qty, 0)
      : 0;

  return (
    <Root>
      <div  onClick={() => {
              navigate("/");
              setInputValue("");
            }}>
        <Img src={shoppinglogo} alt="logo" />
      </div>
      <SearchBar>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buying makes us happy"
            inputProps={{ "aria-label": "Buying makes us happy" }}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Box sx={{ "& button": { m: 1 } }}>
          <StyledButton
            onClick={() => navigate(`/mystore/products?search=${inputValue}`)}
            variant="contained"
            size="large"
          >
            search
          </StyledButton>
        </Box>
      </SearchBar>

      <CartButton  onClick={() => {
              navigate("/cart");
              setInputValue("");
            }}>
        <Badge badgeContent={productsQty} color="error">
          <ShoppingCart fontSize="large" />
        </Badge>
      </CartButton>
    </Root>
  );
}
