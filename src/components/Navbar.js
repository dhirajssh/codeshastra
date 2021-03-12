import React from 'react'
import { Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <div>
      <Nav className="justify-content-end" activeKey="/">
        <Nav.Item>
          <Nav.Link href='/login' eventKey="link-1">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Navbar
