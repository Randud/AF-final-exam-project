import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${backgroundImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 250px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  h1{
    font-size: 45px;
    font-family: 'Roboto Slab', serif;
  }

  p{
    font-family: 'Raleway', sans-serif;
    font-size: 25px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Let's organize your event with us!</p>
      </Container>
    </Jumbo>
  </Styles>
)