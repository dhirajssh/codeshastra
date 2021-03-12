import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import phone from '../images/phone.jpg';

const Product = () => {
  return (
    <Card className="rounded" style={{border: '1px solid #bdbdbd', width: '18rem', margin: '2rem'}}>
      {/* <Link to={`/product/${product._id}`}> */}
        <Card.Img src={phone} variant="top" />
      {/* </Link> */}

      <Card.Body>
        {/* <Link to={`/product/${product._id}`}> */}
          <Card.Title as="h5">
            <strong>Some Phone</strong>
          </Card.Title>
        {/* </Link> */}

        <Card.Text as="div">Mumbai</Card.Text>
        <Card.Text as="div">Posted on 12/08/20</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
