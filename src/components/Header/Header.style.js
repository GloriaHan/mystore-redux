import styled from "styled-components";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Root = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  background-color: #0097a7;
`;

export const Img = styled.img`
  height: 50px;
  border-radius: 20%;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  background-color: #3f51b5 !important;

  &:disabled {
    color: white !important;
    background-color: grey !important;
  }
`;

export const ShoppingCart = styled(AddShoppingCartIcon)`
  color: white;
`;
export const CartButton = styled.div``;
