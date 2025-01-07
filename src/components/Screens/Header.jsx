import React, { Fragment } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import contact from "../../logo/contact.png";
import fashion from "../../logo/fashion-logo.webp";
import shopping from "../../logo/shopping-cart.png";
function Header() {
  return (
    <>
      <Helmet>
        <title>Header</title>
      </Helmet>
      <HeaderContainer>
        <LeftContainer>
          <Left>
            <ListLeft>
              <Logo src={fashion} alt="" />
            </ListLeft>
            <ListLeft>Shirt</ListLeft>
            <ListLeft>Pant</ListLeft>
            <ListLeft>Jeans</ListLeft>
          </Left>
        </LeftContainer>
        <RightContainer>
          <Right>
            <RightList>About</RightList>
            <RightList>Contact</RightList>
            <RightList>
              <LogoCrat src={shopping} alt="" />
            </RightList>
            <RightList>
              <LogoContact src={contact} alt="" />
            </RightList>
          </Right>
        </RightContainer>
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
  background: #5d5c1d;
`;
const LeftContainer = styled.div`
  width: 40%;
  margin-right: 200px;
`;
const Left = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`;
const ListLeft = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: #050505;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;
const Logo = styled.img`
  width: 100px;
  height: 80px;
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
  font-size: 20px;
  font-weight: bold;
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

export default Header;
