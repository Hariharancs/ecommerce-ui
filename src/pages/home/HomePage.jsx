import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { ProductGrid } from "./ProductsGrid";

// import { products } from "../assets/products";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  // fetch("http://localhost:3000/api/products")
  //   .then((response)=> {
  //     return response.json();
  //   })
  //   .then((data)=> {
  //       console.log("Data from server:", data);
  //     })
  // Use effect only returns a clean function, it will not return any promise so, async and await will not work,
  // For using async await in useEffect we need to write a function expression (not named function expression) as like below
  useEffect(() => {
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart}/>
      </div>
    </>
  );
}
