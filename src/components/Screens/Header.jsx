import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import contact from "../../logo/contact.png";
import fashion from "../../logo/fashion-logo.webp";
import shopping from "../../logo/shopping-cart.png";
import { Link } from "react-router-dom";
import del from "../../logo/remove.png";
function Header() {
  const [click, setClick] = useState(false);
  console.log(click, "click");

  return (
    <>
      <Helmet>
        <title>Header</title>
      </Helmet>
      <HeaderContainer>
        <LeftContainer>
          <LogoContainer>
            <img src={fashion} alt="" />
          </LogoContainer>
        </LeftContainer>
        <RightContainer>
          <Right>
            <RightList>About</RightList>
            <RightList>Contact</RightList>
            <RightList>
              <div onClick={() => setClick(true)}>
                <LogoCrat src={shopping} alt="" />
              </div>
            </RightList>
            <RightList onClick={() => setClick(true)}>
              <LogoContact src={contact} alt="" />
            </RightList>
          </Right>
        </RightContainer>
        <Drawer className={click ? "active" : ""}>
          <div onClick={() => setClick(false)}>
            <img src={del} alt="" />
          </div>
          <h1> Cart</h1>
          <ul>
            <li>WATCH</li>
            <li>TELEVISION</li>
            <li>RING</li>
            <li>SHIRT</li>
            <li>BAG</li>
          </ul>
        </Drawer>
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 20%;

  img {
    width: 100%;
    display: block;
  }
`;
const LeftContainer = styled.div`
  width: 40%;
`;
const Left = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`;

const RightContainer = styled.div`
  width: 40%;
`;
const Right = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
`;
const RightList = styled.li`
  font-size: 15px;
  font-family: "kidilam_font_bold";
  color: #0b0a0a;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;
const LogoCrat = styled.img`
  width: 30px;
  height: 30px;
`;
const LogoContact = styled.img`
  width: 30px;
  height: 30px;
`;
const Drawer = styled.div`
  img {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    color: #000;
  }
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  li {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1);
    margin-bottom: 10px;
  }
  position: absolute;
  background: #06b38b;
  width: 300px;
  height: 100vh;
  right: -303px;
  top: 0;
  transition: 2s;
  z-index: 1;
  &.active {
    right: 0;
  }
`;

export default Header;
