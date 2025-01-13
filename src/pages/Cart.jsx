import React, { useEffect, useState } from "react";
import Header from "../components/Screens/Header";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import pic from "../logo/1692947383286-714WUJlhbLS._SL1500_.jpg";

function Cart() {
  const [cart, setCart] = useState([]);
  console.log(cart, "cart");

  const { id } = useParams;
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/${id}`)
      .then((response) => {
        setCart(response.data);
        console.log(response.data);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  return (
    <>
      <Header />
      <Maincontainer>
        <Heading>
          CART
          <Span></Span>
        </Heading>

        <Table>
          <Thead>
            <Tr>
              <Th colSpan="2">Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>SubTotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <ProductImage src={pic} alt="" />
              </Td>
              <Td>HeadPhone</Td>
              <Td>678</Td>
              <Td>
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
              </Td>
              <Td>56</Td>
            </Tr>
          </Tbody>
          <Footer>
            <Tr>
              <Td>
                <Input type="text" placeholder="Coupon code" />
                <Button1>Apply Coupon</Button1>
              </Td>
              <Td>
                <Button2>Update Cart</Button2>
              </Td>
            </Tr>
          </Footer>
        </Table>
        <CartDiv>
          <CartTable>
            <Thead>
              <Tr>
                <Th colSpan="2">CART</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>SubTotal</Td>
                <Td>832</Td>
              </Tr>
              <Tr>
                <Td>total</Td>
                <Td>832</Td>
              </Tr>
            </Tbody>
            <Tfooter>
              <Button3>Proceed To Checkout</Button3>
            </Tfooter>
          </CartTable>
        </CartDiv>
      </Maincontainer>
    </>
  );
}
const Maincontainer = styled.div`
  padding: 20px;
`;
const Heading = styled.h1`
  margin-left: 100px;
  font-size: 35px;
  font-weight: bold;
`;
const Span = styled.div`
  border-bottom: 4px solid #678f67;
  width: 80%;
`;
const Table = styled.table`
  border: 1px solid #000;
  width: 100%;
  margin-bottom: 20px;
`;
const Thead = styled.thead`
  border: 1px solid #000;
  text-align: center;
`;
const Tr = styled.tr`
  text-align: center;
`;
const Th = styled.th`
  border: 1px solid #000;
  text-align: center;
  padding: 10px;
`;
const Td = styled.td`
  border-bottom: 1px solid #c6bebe;
  text-align: center;
`;
const ProductImage = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;
const Tbody = styled.tbody``;
const Footer = styled.tfoot`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  padding: 6px;
  margin-right: 10px;
  cursor: pointer;
`;
const Select = styled.select`
  padding: 5px;
`;
const Option = styled.option`
  padding: 5px;
`;
const Button1 = styled.button`
  background: #216925;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
const Button2 = styled.button`
  background: #71b174;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
const CartDiv = styled.div`
  width: 100%;
  display: inline-block;
`;
const CartTable = styled.table`
  border: 1px solid #000;
  width: 30%;
  margin-right: 100px;
`;
const Tfooter = styled.tfoot`
  text-align: center;
`;
const Button3 = styled.button`
  background: #216925;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export default Cart;
