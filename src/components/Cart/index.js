import React, { useContext } from "react";
import { CartContext } from "../App/index";
import {
  Root,
  Th,
  Img,
  Title,
  Qty,
  Product,
  Price,
  Table,
  Tr,
  Td,
  Thead,
  Tbody,
  Header,
  Container,
  StyledButton,
} from "./Cart.style";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";

export default function Cart() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const productsQty =
    productsInCart.length > 0
      ? productsInCart.reduce((a, b) => a + b.qty, 0)
      : 0;

  const totalPrice =
    productsInCart.length > 0
      ? productsInCart.reduce((a, b) => a + b.qty * b.price, 0)
      : 0;

  const addToCart = (e, item) => {
    let result = productsInCart.find((itemObj) => itemObj.id === item.id);
    if (result) {
      result.qty = e.target.value;
      setProductsInCart([...productsInCart]);
    }
  };
  const deleteProduct = (e, item) => {
    const newProductsList = [...productsInCart].filter((itemObj) => {
      return itemObj.id !== item.id;
    });
    setProductsInCart(newProductsList);
  };
  return (
    <Root>
      <Header>Your shopping Cart : {productsQty} items </Header>
      <Container>
        <Table>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Quantity</Th>
              <Th>Unit Price</Th>
              <Th>Sub-Total</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {productsInCart.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <Product>
                    <Img src={item.image} alt={item.title} />
                    <Title>{item.title}</Title>
                  </Product>
                </Td>
                <Td>
                  <Qty>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id="demo-select-small">Qty</InputLabel>
                      <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={item.qty}
                        label="Qty"
                        onChange={(e) => addToCart(e, item)}
                      >
                        {new Array(20).fill(1).map((item, index) => (
                          <MenuItem key={index} value={index + 1}>
                            {index + 1}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Qty>
                </Td>
                <Td>
                  <Price>${item.price}</Price>
                </Td>
                <Td>
                  <Price>
                    {`$${Number(item.qty * item.price).toFixed(2)}`}
                  </Price>
                </Td>
                <Td>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                    <Chip
                      onClick={(e) => deleteProduct(e, item)}
                      variant="outlined"
                      color="danger"
                      endDecorator={<ChipDelete />}
                    >
                      Delete
                    </Chip>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>

      <Container className="checkout">
        <div>
          <StyledButton variant="contained">Checkout</StyledButton>
          <p>items: {productsQty}</p>
          <p>Post fee : Free</p>
        </div>
        <div>
          <p>Total: ${`$${Number(totalPrice).toFixed(2)}`}</p>
        </div>
      </Container>
    </Root>
  );
}
