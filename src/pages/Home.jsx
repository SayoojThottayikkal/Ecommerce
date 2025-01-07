import React from "react";
import Header from "../components/Screens/Header";
import Spotlight from "./Spotlight";
import ProductList from "./products/ProductList";

function Home() {
  return (
    <>
      <Header />
      <Spotlight />
      <ProductList />
    </>
  );
}

export default Home;
