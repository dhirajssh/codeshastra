import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const initialValues = {
  email:'',
  password:'',
}

function LoginScreen() {

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <Row style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
        <Col xs={7}>
          <Card className="p-4 rounded" style={{ zIndex:'2', position:'relative' }}>
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
             </form>
             <small className="text-danger text-center">error</small>
             <Link className="text-center mt-2" to='/register'>Sign Up</Link>
          </Card> 
        </Col>
      </Row> 
    </div>
  )
}

export default LoginScreen
