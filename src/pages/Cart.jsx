import React, { useEffect, useState } from "react";
import Header from "../components/Screens/Header";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import pic from "../logo/1692947383286-714WUJlhbLS._SL1500_.jpg";
import crt from "../logo/verification.png";
import bg from "../logo/round (1).png";

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
        <ButtonHead>
          <p>
            <img src={crt} alt="" />
            &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit....
          </p>
          <button>View Cart</button>
        </ButtonHead>

        <Table>
          <Thead>
            <Tr>
              <Th colSpan="3">Product</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th>SubTotal</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <TdImage>
                <img src={bg} alt="" />
              </TdImage>

              <Td>
                <ProductImage src={pic} alt="" />
              </Td>
              <Td>HeadPhone</Td>
              <Td>678</Td>
              <Td>
                <Select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Select>
              </Td>
              <Td>56</Td>
            </Tr>
            <tr>
              <Buttoncontainer colSpan="3">
                <Input type="text" placeholder="Coupon code" />

                <Button1>Apply Coupon</Button1>
              </Buttoncontainer>
              <Footer colSpan="3">
                <Button2>Update Cart</Button2>
              </Footer>
            </tr>
          </Tbody>
        </Table>

        <CartDiv>
          <CartTable>
            <Thead>
              <Trcart>
                <Thcart colSpan="2">Cart Total</Thcart>
              </Trcart>
            </Thead>
            <Tbody>
              <Trcart>
                <Tdcart>SubTotal</Tdcart>
                <Tdcart>832</Tdcart>
              </Trcart>
              <Trcart>
                <Tdcart>total</Tdcart>
                <Tdcart>832</Tdcart>
              </Trcart>
            </Tbody>
            <Tfooter>
              <tr>
                <td colSpan="2">
                  <Button3>Proceed To Checkout</Button3>
                </td>
              </tr>
            </Tfooter>
          </CartTable>
        </CartDiv>
      </Maincontainer>
    </>
  );
}
const Maincontainer = styled.div`
  padding: 20px;
  height: 100vh;
  background: #d8e8e3;
  font-family: "kidilan_font_light";
`;
const Heading = styled.h1`
  margin-left: 100px;
  font-size: 35px;
  font-weight: bold;
`;
const Span = styled.div`
  border: 3px solid #111312;
  width: 80%;
  margin-bottom: 40px;
`;
const Table = styled.table`
  border: 1px solid #626563;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 80px;
`;
const Thead = styled.thead`
  border: 1px solid #000;
  text-align: center;
  background: #e7eeea;
`;
const Tr = styled.tr`
  text-align: center;
`;
const Th = styled.th`
  border-bottom: 1px solid #626563;

  text-align: center;
  padding: 10px;
`;
const Td = styled.td`
  border-bottom: 1px solid #c6bebe;
  text-align: center;
`;
const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: inline-block;
`;
const Tbody = styled.tbody``;
const Footer = styled.td`
  position: absolute;
  right: 40px;
  padding: 10px;
`;
const Input = styled.input`
  padding: 6px;
  margin-right: 10px;
  cursor: pointer;
`;
const Select = styled.select`
  option {
    font-weight: bold;
  }
  padding: 5px 8px;
`;

const Button1 = styled.button`
  background: #62c4b5;
  padding: 10px 20px;
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
  color: #3d4a3e;
  border: none;
  &:hover {
    color: black;
  }
`;
const CartDiv = styled.div`
  width: 90%;
  display: inline-block;
`;
const CartTable = styled.table`
  border: 1px solid #626563;
  width: 30%;
  position: absolute;
  right: 100px;
  text-align: left;
  padding: 20px;
  font-family: "kidilan_font_light";
`;
const Tfooter = styled.tfoot`
  td {
    padding: 5px;
    margin-top: 30px;
  }
  text-align: center;
  width: 100%;
`;
const Button3 = styled.button`
  width: 100%;
  background: #78dacc;
  padding: 10px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;
const TdImage = styled.td`
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
const Thcart = styled.th`
  border-bottom: 1px solid #c6bebe;
  font-size: 20px;
  font-weight: bold;
  font-family: "kidilan_font_light";
  padding: 5px;
`;
const Tdcart = styled.td`
  text-align: left;
  border-bottom: 1px solid #c6bebe;
  font-size: 20px;
  font-family: "kidilan_font_light";
  padding: 5px;
`;
const Trcart = styled.tr`
  padding: 3px;
  border-bottom: 1px solid #c6bebe;
  text-align: left;
  font-size: 20px;
  font-family: "kidilan_font_light";
`;
const Buttoncontainer = styled.td`
  padding: 10px;
`;
const ButtonHead = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 138px;

  button {
    background: #62c4b5;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 50px;
  }
  p {
    margin-left: 100px;
    img {
      width: 15px;
      height: 16px;
    }
  }
`;
export default Cart;
