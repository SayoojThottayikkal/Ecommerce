import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

function Product() {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProds(response.data);
        console.log(response.data, "response");
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  return (
    <>
      <MainDiv>
        <LeftDiv>
          <ProductImage />
        </LeftDiv>
        <RightDiv>
          <Title></Title>
          <Price></Price>
          <Description></Description>
          <Select>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
            <Option>7</Option>
          </Select>
          <Button>ADD TO CART</Button>
        </RightDiv>
      </MainDiv>
    </>
  );
}
const MainDiv = styled.div``;
const LeftDiv = styled.div``;
const ProductImage = styled.img``;
const RightDiv = styled.div``;
const Title = styled.div``;
const Price = styled.span``;
const Description = styled.p``;
const Select = styled.select``;
const Option = styled.option``;
const Button = styled.button``;
export default Product;
