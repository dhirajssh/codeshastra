import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import Header from '../components/Navbar';
import styled from 'styled-components';

const FoundScreen = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const [brand, setBrand] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    // const uploadFileHandler = async (e) => {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('image', file);
    
    //     try {
    //       const config = {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       };
    
    //       const { data } = await axios.post(
    //         '/api/upload',
    //         formData,
    //         config,
    //       );
    
    //       setImage(data);
    //     } catch (err) {
    //       console.error(err);
    //       setUploading(false);
    //     }
    //   };

    return (
    <>
        <Header/>
        <Image src="https://www.clarendonhills.us/ImageRepository/Document?documentID=609"></Image>
        <div style={{ padding: '5rem 15rem' }}>
            <Heading>Enter Found Item Details</Heading>
            <FoundForm>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter phone no" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="formGridBrand">
                    <Form.Label>Brand of item</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter brand" 
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                    <Form.Label>Date when item was found</Form.Label>
                    <Form.Control 
                        type="date" 
                        placeholder="Enter date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address where item was found</Form.Label>
                    <Form.Control 
                        placeholder="1234 Main St" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows={2} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control 
                        placeholder="Enter pincode" 
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}/>
                    </Form.Group>
                </Form.Row>
                
                <Form.Group controlId="formGridDescription">
                    <Form.Label>Article Description</Form.Label>
                    <Form.Control 
                        placeholder="Enter description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3} />
                </Form.Group>

                <Form.Group>
                    <Form.File id="image-file" label="Add images" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </FoundForm>
        </div>
    </>
    );
  };
  
  export default FoundScreen;

  const FoundForm = styled(Form) `
    background: rgb(255,255,255,0.7);
    padding: 5rem;
    border-radius: 10px;
  `
  const Heading = styled.h1 `
    text-align: center;
    margin-bottom: 3rem;
  `
  const Image = styled.img `
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: -1
  `