import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Root, List } from "./SideBar.style";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, useParams } from "react-router-dom";
import { searchvalueAction } from "../../redux/actions/searchvalue";

function Sidebar({inputValue, searchvalueAction,}) {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const navigate = useNavigate();
  const { category } = useParams();

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
              searchvalueAction("");
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
                searchvalueAction("");
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

export default connect(
  (state) => ({
    inputValue: state.searchValue,
  }),
  {
    searchvalueAction: searchvalueAction,
  }
)(Sidebar);
