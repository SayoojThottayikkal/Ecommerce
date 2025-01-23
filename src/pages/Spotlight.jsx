import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../logo/bg.jpg";

function Spotlight({ gettext }) {
  console.log(gettext, "gettext");

  return (
    <>
      <SpotLight>
        <Heading>Exiting offers</Heading>
        <Description>Grab it before it ends!!!!</Description>
      </SpotLight>
    </>
  );
}
const SpotLight = styled.div`
  height: calc(100vh - 50px);
  background: url(${bg});
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: 40px;

  color: white;
  font-family: "kidilam_font";
`;

const Description = styled.p`
  color: white;
  font-family: "kidilan_font_light";
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
  text-decoration: none;
`;

export default Spotlight;
