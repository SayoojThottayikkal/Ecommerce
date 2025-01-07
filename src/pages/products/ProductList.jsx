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
              {/* <Model></Model> */}
              <Category>{item.Category}</Category>
              <Description>{item.Description}</Description>
              <Price> {item.price}</Price>
              <Button to="/product">Shop Now</Button>
            </RightConatiner>
          </ProductContainer>
        ))}
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 100%;
  padding: 10px;
`;
const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftContainer = styled.div`
  width: 40%;
  padding: 20px;
  text-align: center;
`;
const ProductImage = styled.img`
  width: 80%;
  display: block;
`;
const RightConatiner = styled.div`
  width: 60%;
  padding: 20px;
`;
const Category = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
const Description = styled.p`
  color: #686d71;
`;
const Price = styled.p`
  font-size: 40px;
  font-weight: bold;
`;
const Model = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
const Button = styled(Link)`
  background: blue;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
export default ProductList;
