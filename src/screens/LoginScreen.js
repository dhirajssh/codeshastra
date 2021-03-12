import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImg from '../images/login.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/loginActions';

const initialValues = {
  email:'',
  password:'',
}

function LoginScreen() {

  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState("");
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const handleClick = ()=>{
    if(values.email === '' || values.password === ''){
      setMessage('Please fill all the fields');
    } else{
      dispatch(login(values.email, values.password));
    }
  }

  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', backgroundImage:'linear-gradient(to right, #4895ef, white)' }}>
      <Row style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
        <Col xs={10} md={8}>
          <Card className="p-4" style={{ zIndex:'2', position:'relative', border:'solid 2px #4895ef', borderRadius:'20px'}}>
            <Row style={{height:'100%'}}>
              <Col className="d-none d-md-block" md={6} style={{display:'flex', justifyContent:'center', alignItems:'center', verticalAlign:'middle', marginTop:'auto', marginBottom:'auto', height:'100%'}}>
                <Image src={loginImg} fluid />
              </Col>
              <Col xs={12} md={6}>
              <h5 className="text-center">Login</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address :</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="email" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                  <small className="form-text text-danger" style={{ zIndex: '-4' }}></small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password :</label>
                  <input type="password" className="form-control" name="password" id="password" placeholder="password" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                  <small className="form-text text-danger"></small>
                </div>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
                  <Button className="btn btn-primary my-2" onClick={() => handleClick()}>Login</Button>
                </div>
              </form>
              <Row className="text-danger text-center"><span style={{width:'100%', textAlign:'center'}}>{message}&nbsp;</span></Row>
              <Row className="text-center">
                  <Link to="/register" style={{width:'100%'}}>Sign Up</Link>
                </Row>
              </Col>
            </Row>
          </Card> 
        </Col>
      </Row> 
    </div>
  )
}

export default LoginScreen
