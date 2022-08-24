import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { addincartAction } from "../../redux/actions/addincart";
import { useParams, useSearchParams } from "react-router-dom";
import { Root, Img, Title, Product, Price, NoResult } from "./Content.style";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { InputContext } from "../App/index";

function Content({ productsInCart, addincartAction }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  // const { productsInCart, setProductsInCart } = useContext(CartContext);
  const { setInputValue } = useContext(InputContext);

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products${
        category ? `/category/${category}` : ""
      }`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      const filterData = search
        ? data.filter(
            (item) =>
              item.title.toUpperCase().includes(search.toUpperCase()) ||
              item.description.toUpperCase().includes(search.toUpperCase())
          )
        : data;
      setProducts(filterData);
    })();
  }, [category, search]);


  const addToCart = (product) => {
    // console.log("productsInCart", productsInCart);
    addincartAction({ ...product, qty:1 });
   };

  if (loading === true) return null;
  return (
    <Root>
      {products.length <= 0 ? (
        <NoResult>
          <h3>Sorry, nothing matched your search.</h3>
          <h3>Please search again.</h3>
        </NoResult>
      ) : (
        products &&
        products.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 195,
                height: 260,
              },
            }}
          >
            <Paper elevation={2}>
              <Product
                onClick={() => {
                  navigate(`/products/${item.id}`);
                  setInputValue("");
                }}
              >
                <Img src={item.image} alt={item.title} />
                <Title>{item.title}</Title>
                <Price>${item.price}</Price>
                <Button
                  variant="contained"
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/cart");
                    setInputValue("");
                    addToCart(item);
                  }}
                >
                  BUY NOW
                </Button>
              </Product>
            </Paper>
          </Box>
        ))
      )}
    </Root>
  );
}

export default connect((state) => ({ productsInCart: state.sumInCart }), {
  addincartAction: addincartAction,
})(Content);
