import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImg from '../images/login.svg';
import { states } from '../states';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/loginActions';

const initialValues = {
  name : "",
  email : "",
  mobile : "",
  password : "",
  cpassword : "",
  state : "",
  district : "",
}

function SignupScreen() {

  const userRegister = useSelector((state) => state.userRegister);
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({password:''});
  const [districts, setDistricts] = useState();
  const [message, setMessage] = useState('');

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
    if ('state' in fieldValues)
      temp.state = fieldValues.state ? "" : "This field is required."
    if ('district' in fieldValues)
      temp.district = fieldValues.district ? "" : "This field is required."

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

  const handleClick = () => {
    validate();
    if(errors.name === "" && errors.email === "" && errors.mobile === '' && errors.password === '' && errors.cpassword === '' && errors.state === '' && errors.district === ''){
      dispatch(register(values));
      console.log(values);
    }
  }

  useEffect(()=>{
    if(userRegister.data){
      setMessage(userRegister.data.data.msg);
    }
  },[userRegister])

  const Message = ()=>{
    if(userRegister.data){
      if(userRegister.data.failed){
        setMessage(userRegister.data.failed);
      }
      else if(userRegister.data.msg){
        setMessage(userRegister.data.msg);
      }
    }
  }
  
  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
    if(name === 'state'){
      states.forEach((state)=>{
        if(state.state === value){
          setDistricts(state.districts);
        }
      })
    }
    validate({ [name]: value })
  }
  return (
    <div style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', backgroundImage:'linear-gradient(to right, #4895ef, white)' }}>
      <Row style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
        <Col xs={10} md={9}>
          <Card className="p-4" style={{ zIndex:'2', position:'relative', borderRadius:'20px', minHeight:'600px' }}>
            <Row >
              <Col className="d-none d-lg-block" lg={6} style={{display:'flex', justifyContent:'center', alignItems:'center', verticalAlign:'middle', marginTop:'auto', marginBottom:'auto'}}>
                <Image src={loginImg} fluid />
              </Col>
              <Col xs={12} lg={6}>
                <h4 className="text-center">Sign Up</h4>
                <form>
                  <div className="form-group" style={{marginBottom:'0px'}}>
                    <label htmlFor="name" style={{marginBottom:'0px'}}>Full Name :</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Full Name" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                    <small className="form-text text-danger">{errors.name}&nbsp;</small>
                  </div>
                  <div className="form-group" style={{marginBottom:'0px'}}>
                    <label htmlFor="email" style={{marginBottom:'0px'}}>Email address :</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="email" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                    <small className="form-text text-danger">{errors.email}&nbsp;</small>
                  </div>
                  <div className="form-group" style={{marginBottom:'0px'}}>
                    <label htmlFor="mobile" style={{marginBottom:'0px'}}>Phone Number :</label>
                    <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Phone Number" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                    <small className="form-text text-danger">{errors.mobile}&nbsp;</small>
                  </div>
                  <div className="form-group" style={{marginBottom:'0px'}}>
                    <label htmlFor="password" style={{marginBottom:'0px'}}>Password :</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                    <small className="form-text text-danger">{errors.password}&nbsp;</small>
                  </div>
                  <div className="form-group" style={{marginBottom:'0px'}}>
                    <label htmlFor="cpassword" style={{marginBottom:'0px'}}>Confirm Password :</label>
                    <input type="password" className="form-control" name="cpassword" id="cpassword" placeholder="Confirm Password" style={{ width:'100%' }} onChange={(e)=>{handleInputChange(e)}} />
                    <small className="form-text text-danger">{errors.cpassword}&nbsp;</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={values.state} name="state" onChange={(e)=>{handleInputChange(e)}}>
                      <option selected hidden>Select State</option>
                      {states.map((state)=>{
                        return(
                          <option key={state.state}>{state.state}</option>
                        )
                      })}
                    </select>
                    <small className="form-text text-danger">{errors.state}&nbsp;</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={values.district} name="district" onChange={(e)=>{handleInputChange(e)}}>
                      {districts? 
                      districts.map((district, index)=>{
                        if(index===0){
                          return(
                            <>
                              <option key={"elites"} selected hidden>Select District</option>
                              <option key={district}>{district}</option>
                            </>
                          )
                        }
                        return(<option key={district}>{district}</option>)
                        
                      }) : <option selected hidden>Please Select a State First</option>}
                    </select>
                    <small className="form-text text-danger">{errors.district}&nbsp;</small>
                  </div>
                </form>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
                  <small className="text-success">
                    {userRegister.error ? userRegister.error:message}
                  </small>
                </div>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'100%' }}>
                  <Button className="btn btn-primary my-2"  onClick={()=>handleClick()}>Submit</Button>
                </div>
                <Row className="text-center">
                  <Link to="/login" style={{width:'100%'}}>Login</Link>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SignupScreen
