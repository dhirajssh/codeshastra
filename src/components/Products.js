import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = (props) => {
  return (
    <Card className="rounded" style={{border: '1px solid #bdbdbd'}}>
      {/* <Link to={`/product/${product._id}`}> */}
        <Card.Img src={props.Image} variant="top" />
      {/* </Link> */}

      <Card.Body>
        {/* <Link to={`/product/${product._id}`}> */}
          <Card.Title as="h5">
            <strong>{props.item_name}</strong>
          </Card.Title>
        {/* </Link> */}

        <Card.Text as="div">{props.brand_name}</Card.Text>
        <Card.Text as="div">{props.date}</Card.Text>
        <Card.Text as="span">{props.state}</Card.Text>
        <Card.Text as="span">{props.district}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Posted by {props.posted_by}</small>
      </Card.Footer>
    </Card>
  );
};

export default Product;
