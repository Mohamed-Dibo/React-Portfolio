import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './card.css'

function card({id,title,image,price,category}) {
    return (
        <Card className="product" style={{width:"32%", borderRadius:'25px'}}>
          <div className="product-header">
          <Card.Img variant="top" className="mx-auto pt-3" src={image}/>
          </div>
        <Card.Body className="product-body">
          <Card.Title>{title.slice(0,20).concat("...")}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>
          <Link to={`/ProductDetails/${id}`} className="btn btn-primary d-block mb-3">details</Link>
          <h4 className="price">${price}</h4>
        </Card.Body>
      </Card>
    )
}

export default card
