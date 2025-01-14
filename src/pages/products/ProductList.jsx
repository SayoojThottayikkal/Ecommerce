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
            <RightConatiner>
              <LeftContainer>
                <ProductImage src={item.image} alt={item.title} />
              </LeftContainer>
              <Title>{item.title}</Title>

              <Category>{item.Category}</Category>
              <Description>{item.description}</Description>
              <Price> {item.price}</Price>
              <Button to={`/product/${item.id}`} key={item.id}>
                Shop Now
              </Button>
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
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
`;
const ProductContainer = styled.li`
  width: 40%;
  height: 450px;
  text-align: center;
  margin: 0 auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-bottom: 30px;
`;
const LeftContainer = styled.div`
  padding: 30px;
  text-align: center;
`;
const ProductImage = styled.img`
  width: 80px;
  height: 80px;
`;
const RightConatiner = styled.div`
  padding: 20px;
`;
const Category = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
const Description = styled.p`
  color: #686d71;
  font-size: 10px;
  margin: 0 auto;
  margin-top: 0;
  width: 90%;
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
  width: 90%;
  margin: 0 auto;
`;
const Button = styled(Link)`
  margin: 0 30px auto;
  display: flex;
  display: inline-block;
  border-radius: 8px;
  background: #42bea9;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
`;
export default ProductList;
