import React, { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";
import  "./ProductDetails.css";


function ProductDetails({ match }) {
  const [singleProduct, setsingleProduct] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const displySingleProduct =  () => {
      setLoading(true);
      return fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        .then((res) => res.json())
        .then((json) => {
          setsingleProduct(json);
          setLoading(false);
        });
    };
    displySingleProduct();
    return () => {
      setsingleProduct([]);
    };
  },[match.params.id]);

 
  if (Loading) {
    return <Spinner />;
  }
  return (
    <section className="section product-detail">
    <div className="container">
      <div className="row">
        <div className="details container-md">
          <div className="left-side">
            <figure className="product-image">
              <img src={singleProduct.image} alt="product" />
            </figure>
          </div>
          <div className="right-side">
            <span>{singleProduct.category}</span>
            <h1>{singleProduct.title }</h1>
            <div className="price">${singleProduct.price}</div> 
            <h3>Product Detail</h3>
            <p>{singleProduct.description }</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default ProductDetails;
