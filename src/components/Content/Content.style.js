import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #e0f7fa;
  padding: 8px;
`;

export const NoResult = styled.div`
  color: #37474f;
  text-align: center;
  width:100%;
`;
export const Product = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  overflow: hidden;
  margin: 10px;
  border: hidden;
`;

export const Img = styled.img`
  height: 80px;
  width: 80px;
`;
export const Title = styled.p`
  height: 45px;
  overflow: hidden;
`;
export const Price = styled.p`
  height: 30px;
  font-weight: bold;
  overflow: hidden;
  margin: 0;
`;
