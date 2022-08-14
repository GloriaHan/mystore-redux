import styled from "styled-components";
import Button from "@mui/material/Button";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 20% 80%;
  grid-column-gap: 20px;
  background-color: #e0f7fa;
  padding: 20px;
  width: 100%;
`;
export const Th = styled.th`
  /* display: flex; */
  flex-wrap: wrap;
  background-color: #e0f7fa;
  padding: 8px;
`;

export const span = styled.span`
  /* display: flex; */
  padding-inline: 30px;
`;

export const Img = styled.img`
  height: 80px;
  width: 80px;
`;

export const Title = styled.p`
  overflow: hidden;
  padding-inline: 20px;
`;

export const Qty = styled.p`
  overflow: hidden;
  padding-inline: 20px;
`;
export const Price = styled.p`
  height: 30px;
  font-weight: bold;
  overflow: hidden;
  margin: 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Tr = styled.tr``;

export const Td = styled.td``;

export const Thead = styled.thead`
  tr {
    width: 100%;
  }
  th {
    background: linear-gradient(180deg, #fff, #d9d9d9);
    background-color: #ffffff;
    white-space: nowrap;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid #d9d9d9;
    }
  }
`;

export const Tbody = styled.tbody`
  tr {
    background-color: #ffffff;
    width: 100%;

    &:not(:last-child) {
      border-bottom: 8px solid #e0f7fa;
    }
  }

  td {
    text-align: center;
    padding: 8px;
  }
`;

export const Product = styled.div`
  display: flex;
`;

export const Header = styled.h1`
  grid-column: 1 / 3;
  width: 100%;
`;

export const Container = styled.div`
  border: 1px solid black;
  
  overflow:auto;


  &.checkout {
    padding: 10px;
    height: fit-content !important;
    div {
      font-weight: 700;
    }
    div:first-child {
      border-bottom: 1px solid black;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 20px !important;
`;
