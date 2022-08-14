import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { CartContext } from "../App/index";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Root,
  ImageContainer,
  Title,
  Price,
  BuyBox,
  RatingContainer,
} from "./ProductDetail.style";

export default function ProdectDetail() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = React.useState(1);
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products/${id}`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setProduct(data);
    })();
  }, [id]);

  const addToCart = () => {
    let result = productsInCart.find((item) => item.id === product.id);
    if (result) {
      result.qty = result.qty + qty;
      setProductsInCart([...productsInCart]);
    } else {
      setProductsInCart([...productsInCart, { ...product, qty }]);
    }
  };
  if (loading === true) return null;
  return (
    <div>
      {product && (
        <Root>
          <ImageContainer>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 400,
                  padding: 1,
                },
              }}
            >
              <Paper elevation={9}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: `${product.title}`,
                      isFluidWidth: true,
                      src: product.image,
                    },
                    largeImage: {
                      src: product.image,
                      width: 1200,
                      height: 1800,
                    },
                    isHintEnabled: true,
                    shouldHideHintAfterFirstActivation: false,
                  }}
                />
              </Paper>
            </Box>
          </ImageContainer>
          <Title>{product.title}</Title>
          <div>
            <Price>{`$${Number(product.price).toFixed(2)}`}</Price>
            <RatingContainer>
              <Rating name="simple-controlled" value={product.rating.rate} />
              <p>{product.rating.count}</p>
            </RatingContainer>
          </div>
          <BuyBox>
            <Box sx={{ "& button": { m: 1 } }}>
              <div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Qty</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    data-testid="demo-select-small"
                    value={qty}
                    label="Qty"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => addToCart()}
                >
                  ADD TO CART
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    addToCart();
                    navigate("/cart");
                  }}
                >
                  BUY NOW
                </Button>
              </div>
            </Box>
          </BuyBox>
          <p>{product.description.toLocaleString()}</p>
        </Root>
      )}
    </div>
  );
}
