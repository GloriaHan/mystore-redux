import React, { useState, useEffect, useContext } from "react";
import { Root, List } from "./SideBar.style";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useParams } from "react-router-dom";
import { InputContext } from "../App/index";

export default function Sidebar() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const navigate = useNavigate();
  const { category } = useParams();
  const { setInputValue } = useContext(InputContext);

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products/categories`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setCategories(data);
    })();
  }, []);
  if (loading === true) return null;
  return (
    <Root>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton
            onClick={() => {
              navigate("/mystore/products");
              setInputValue("");
            }}
            selected={category === undefined}
          >
            <ListItemText primary="All products" />
          </ListItemButton>

          {categories?.map((item) => (
            <ListItemButton
              key={item}
              onClick={() => {
                navigate(`/mystore/products/${item}`);
                setInputValue("");
              }}
              selected={item === category}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Root>
  );
}
