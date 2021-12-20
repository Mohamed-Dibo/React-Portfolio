import React, { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import Card from "./card/card";
import './Products.css'
function Products() {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setLoading(false);
        });
    };
    fetchProducts();
    return () => {
      setProducts([]);
    };
  },[]);
 

  if (Loading) {
    return <Spinner />;
  }
  return (
    <section className="products-page">
  <div className="container"> 
  <div className="row justify-content-between">
    <h2 className="title pb-5">All Products</h2>
      {products.map((product) => {
        return <Card key={product.id} {...product} />;
      })}
    </div>
    </div>
    </section>
  );
}

export default Products;
