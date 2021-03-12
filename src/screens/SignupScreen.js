import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const initialValues = {
  name : "",
  email : "",
  mobile : "",
  password : "",
  cpassword : ""
}

function SignupScreen() {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({password:''});

  const validate = (fieldValues = values) => {

    let temp = { ...errors }
    if ('name' in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
      temp.mobile = (/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/).test(fieldValues.mobile) ? "" : "Number is not valid"
    if ('password' in fieldValues)
      temp.password = (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(fieldValues.password) ? "" : "Password must have atleast one special character, one number and have a minimum length of 6"

    setErrors({
        ...temp
    })
  }

  useEffect(()=>{
    let temp = { ...errors }
    if(temp.password===""){
      temp.cpassword = (values.password===values.cpassword) ? "":"Passwords do not match";
    }
    else if(temp.password!=="" && values.password!==""){
      temp.cpassword = "Please fill the password field Correctly"
    }
    setErrors({
      ...temp
  })
  },[values.cpassword])
  
  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
    console.log(values);
    validate({ [name]: value })
  }

  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
      <Row style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
        <Col xs={7}>
          <Card className="p-4 rounded" style={{ zIndex:'2', position:'relative' }}>
            <h4 className="text-center">Sign Up</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name :</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Full Name" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                <small className="form-text text-danger">{errors.name}&nbsp;</small>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address :</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="email" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                <small className="form-text text-danger">{errors.email}&nbsp;</small>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Phone Number :</label>
                <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Phone Number" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                <small className="form-text text-danger">{errors.mobile}&nbsp;</small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password :</label>
                <input type="password" className="form-control" name="password" id="password" placeholder="Password" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                <small className="form-text text-danger">{errors.password}&nbsp;</small>
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Password :</label>
                <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Confirm Password" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                <small className="form-text text-danger">{errors.cpassword}&nbsp;</small>
              </div>
             </form>
             <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
              <Button className="btn btn-primary my-2"  onClick={()=>validate()}>Submit</Button>
             </div>
             <Link className="text-center" to="/login">Sign In</Link>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SignupScreen
