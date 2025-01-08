import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  console.log(product, "product state");

  return (
    <>
      <MainContainer>
        {product.map((item) => (
          <ProductContainer>
            <LeftContainer>
              <ProductImage src={item.image} alt={item.title} />
            </LeftContainer>
            <RightConatiner>
              <Title>{item.title}</Title>

              <Category>{item.Category}</Category>
              <Description>{item.description}</Description>
              <Price> {item.price}</Price>
              <Button to="/product">Shop Now</Button>
            </RightConatiner>
          </ProductContainer>
        ))}
      </MainContainer>
    </>
  );
}
const MainContainer = styled.ul`
  padding: 10px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
const ProductContainer = styled.li`
  display: flex;
  width: 50%;

  justify-content: space-evenly;
  align-items: center;
`;
const LeftContainer = styled.li`
  width: 45%;
  padding: 40px;
  text-align: center;
`;
const ProductImage = styled.img`
  width: 100%;
  display: block;
`;
const RightConatiner = styled.li`
  width: 30%;
  padding: 20px;
`;
const Category = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
const Description = styled.p`
  color: #686d71;
  font-size: 8px;
  text-align: center;
  margin-top: 0;
`;
const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
`;
const Button = styled(Link)`
  margin: 0 30px auto;
  display: flex;
  display: inline-block;
  border-radius: 8px;
  background: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
export default ProductList;
