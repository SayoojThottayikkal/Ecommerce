import React, { useEffect, useState } from "react";
import Header from "../components/Screens/Header";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
        {cart.map((item) => (
          <MainTable>
            <Table>
              <Tr>
                <Th>SlNo</Th>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
              </Tr>
              <Tr>
                <Td>
                  <Td>1</Td>
                  <ProductImage src={item.image} />
                </Td>
                <Td>{item.data}</Td>
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
                <Td>1</Td>
              </Tr>
            </Table>
          </MainTable>
        ))}
      </Maincontainer>
    </>
  );
}
const Maincontainer = styled.div``;
const MainTable = styled.div``;
const Table = styled.table``;
const Tr = styled.tr``;
const Th = styled.th``;
const ProductImage = styled.img``;
const Td = styled.td``;
const Select = styled.select``;
const Option = styled.option``;
export default Cart;
