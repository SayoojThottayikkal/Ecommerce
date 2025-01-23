import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../Screens/Header";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Context } from "../../context/store";

function Product() {
  const [prods, setProds] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");
  const {
    state: { cart_data },
    dispatch,
  } = useContext(Context);

  const addToCart = (prods) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...storedCart, prods];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch({
      type: "UPDATE_CART_DATA",
      cart_data: {
        cartItems: updatedCart,
      },
    });
    navigate("/cart");
  };
  const cartitems = cart_data.cartItems;

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
          <Button
            onClick={() => {
              notify();
              addToCart(prods);
            }}
            // to={`/cart/${prods.id}`}
          >
            ADD TO CART
          </Button>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
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
  padding: 60px;
  height: 75vh;
`;
const LeftDiv = styled.div`
  width: 30%;

  padding: 60px;
`;
const ProductImage = styled.img`
  width: 100%;
  display: block;
`;
const RightDiv = styled.div`
  width: 60%;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
const Price = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
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
  padding: 10px;
`;
const Option = styled.option`
  padding: 10px;
`;
const Button = styled.button`
  background: #40b8a6;
  color: #000;
  padding: 15px 90px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;
export default Product;
