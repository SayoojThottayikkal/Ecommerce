import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Screens/Header";

function Product() {
  const [prods, setProds] = useState([]);

  const { id } = useParams();
  console.log(prods, "prods");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProds(response.data);
        console.log(response.data);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  return (
    <>
      <Header />
      <MainDiv key={prods.id}>
        <LeftDiv>
          <ProductImage src={prods.image} alt={prods.title} />
        </LeftDiv>
        <RightDiv>
          <Title>{prods.title}</Title>
          <Price>{prods.price}</Price>
          <Description>{prods.description}</Description>
          <Select>
            <Option>0</Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <Option>5</Option>
            <Option>6</Option>
            <Option>7</Option>
          </Select>
          <Button to="/cart">ADD TO CART</Button>
        </RightDiv>
      </MainDiv>
      ;
    </>
  );
}
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftDiv = styled.div`
  width: 40%;
  padding: 20px;
`;
const ProductImage = styled.img`
  width: 100%;
  display: block;
`;
const RightDiv = styled.div`
  width: 50%;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
const Price = styled.span``;
const Description = styled.p`
  color: #666060;
  margin-bottom: 50px;
`;
const Select = styled.select`
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  height: 50px;
  border-radius: 8px;
  margin-right: 20px;
`;
const Option = styled.option``;
const Button = styled(Link)`
  background: #174916;
  color: #000;
  padding: 15px 90px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;
export default Product;
