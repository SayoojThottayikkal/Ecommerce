import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Spotlight() {
  const [spot, setSpot] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((response) => {
        setSpot(response.data);
        console.log(response.data, "spt");
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);
  return (
    <>
      <SpotLight>
        <SpotLightLeft>
          <SpotLightImage src={spot.image} />
        </SpotLightLeft>
        <SpotLightRight>
          <Title>{spot.title}</Title>

          <Description>{spot.description}</Description>
          <Price>{spot.price}</Price>
          <Category>{spot.category}</Category>
          <Button to="/product">Shop Now</Button>
        </SpotLightRight>
      </SpotLight>
    </>
  );
}
const SpotLight = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #000;
  width: 80%;
  margin: 0 auto;
`;
const SpotLightRight = styled.div`
  width: 60%;
`;
const SpotLightLeft = styled.div`
  padding: 20px;
  width: 30%;
`;
const SpotLightImage = styled.img`
  width: 100%;
  display: block;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: flex;
`;
const Description = styled.p`
  color: #5f5c5c;
`;
const Category = styled.p`
  font-size: 18;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Button = styled(Link)`
  background: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export default Spotlight;
