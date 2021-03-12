import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <Navs activeKey="/">
        <Navbar.Brand href="#">Lost and Found</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Select State" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="justify-content-end">
          <Loginlink href='/login' eventKey="link-1">Login</Loginlink>
          <Signuplink href='/register' eventKey="link-1">Sign Up</Signuplink>
        </Nav>
      </Navs>
    </>
  )
}

export default Header;

const Navs = styled(Navbar) `
  border-bottom: 1px solid #c6c6c6;
  padding: 1.2rem 2rem;
  max-width: 100vw;
  background: #fff;
`

const Loginlink = styled(Nav.Link) `
  background: #4895ef;
  color: #fff;
  border: 1px solid #4895ef;  
  padding: 0.5rem 2rem;
  margin-right: 2rem;
`

const Signuplink = styled(Nav.Link) `
  background: #fff;
  color: #4895ef;
  border: 1px solid #4895ef;
  padding: 0.5rem 2rem;
  margin-right: 2rem;
`
// 3f37c9
// 7209b7
// 4895ef
// 480ca8