import React, { useState } from "react";
import Header from "../components/Screens/Header";
import Spotlight from "./Spotlight";
import ProductList from "./products/ProductList";

function Home() {
  const [gettext, setGettext] = useState("hi");
  return (
    <>
      <Header />
      <Spotlight gettext={gettext} />
      <ProductList />
    </>
  );
}

export default Home;
