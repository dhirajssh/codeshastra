import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Col, Button, Row } from 'react-bootstrap';
import Header from '../components/Navbar';
import Product from '../components/Products';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { listProducts } from '../actions/ProductActions'

const SearchScreen = () => {
    // const [keyword, setKeyword] = useState('');
    
    const productList = useSelector(state => state.productList)
    console.log(productList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    let content = [];

    if(productList) {
        content.push(
            <Row>
                <Col>
                    <h3>Filter By</h3>
                    <h5>Pincode</h5>
                    <Form.Control placeholder="Enter pincode"/>
                    <h5>Categories</h5>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                    </ul>
                    <hr/>
                    <h5>State</h5>
                    <ul>
                        <li>State 1</li>
                        <li>State 2</li>
                        <li>State 3</li>
                        <li>State 4</li>
                    </ul>
                    <h5>District</h5>
                    <ul>
                        <li>District 1</li>
                        <li>District 2</li>
                        <li>District 3</li>
                        <li>District 4</li>
                    </ul>
                    <hr/>
                </Col>
                <Col lg={9}>
                    <Row xs={1} sm={2} md={3} lg={4} >
                        {productList.data.map((prod) => (
                            <Col>
                                <Product Image={prod.Image} item_name={prod.item_name} brand_name={prod.brand_name} date={prod.date} state={prod.state} district={prod.district} posted_by={prod.posted_by}/>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        )
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     if (keyword.trim()) {
    //       history.push(`/search/${keyword}`);
    //     } else {
    //       history.push('/');
    //     }
    //   };

    return (
        <>
            <Header/>
            <Container>
            {/* <StyledForm onSubmit={submitHandler} inline>
                <StyledFormControl
                    type="text"
                    name="q"
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search Products..."
                    className="mr-sm-2 ml-sm-5"
                />
                <StyledButton onClick={submitHandler}>
                    <Icon className="fas fa-search" />
                </StyledButton>
            </StyledForm> */}
            <Form.Group>
                <Form.Row>
                    <Form.Label column="lg" lg={2}>Search for lost items</Form.Label>
                    <Col>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                    </Col>
                    <Col>
                        <Button type="submit">Search</Button>
                    </Col>
                </Form.Row>
            </Form.Group>
            {productList.loading ? (
                <h4>Loading...</h4>
                ) : productList.error ? (
                    <h4>{productList.error}</h4>
                ) : (
                    {content}
                )}
            
            </Container>
        </>
    );
};

export default SearchScreen;

