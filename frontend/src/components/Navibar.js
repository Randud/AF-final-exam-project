import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`

.navbar 
{
    background-color:#3c3c3d;
}

.navbar-brand{
    color: #bbb;
    font-family: 'Marck Script', cursive;
    font-size: 35px;

    &:hover{
        color: white;
    }
}

.nav-link{
  font-size: 20px;
  color: white;
  font-family: 'Lora', serif;
}

`;


export const Navibar = () => (
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="../">e.Events</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="../">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="../page/AboutUs"><p>About Us</p></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles > 
)
