import React from "react";
import { connect } from "react-redux";
import { addincartAction } from "../../redux/actions/addincart";
import { searchvalueAction } from "../../redux/actions/searchvalue";
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

function Header({ productsInCart, inputValue, searchvalueAction }) {
 
  const navigate = useNavigate();
  const productsQty =
    productsInCart.length > 0
      ? productsInCart.reduce((a, b) => a + b.qty, 0)
      : 0;

  return (
    <Root>
      <div
        onClick={() => {
          navigate("/");
          searchvalueAction("");
        }}
      >
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
            onChange={(e) => searchvalueAction(e.target.value)}
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

      <CartButton
        onClick={() => {
          navigate("/cart");
          searchvalueAction("");
        }}
      >
        <Badge badgeContent={productsQty} color="error">
          <ShoppingCart fontSize="large" />
        </Badge>
      </CartButton>
    </Root>
  );
}

export default connect(
  (state) => ({
    productsInCart: state.sumInCart,
    inputValue: state.searchValue,
  }),
  {
    addincartAction: addincartAction,
    searchvalueAction: searchvalueAction,
  }
)(Header);
