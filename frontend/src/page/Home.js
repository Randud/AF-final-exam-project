import React from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import AddNewEvent from '../components/AddNewEvent';
import Popup from "reactjs-popup";
import Button from 'react-bootstrap/Button';

const Styles = styled.div`
    h1{
        font-size: 25px;
        font-family: 'Roboto Slab', serif;
    }

    p{  
        font-family: 'Raleway', sans-serif;
        color: #424242;
    }

    h2{
        font-size: 49px;
        text-align: center;
        color:#454040;
        font-family: 'Lora', serif;
    }
    
`;

export const Home = () => (
    
    <Styles>
      <Container>
      <div>
            <h1>Why Us?</h1>
            <p>
            "Are you worried about your safety during this Covid-19 pandemic situation and also do you wants to held your event? That's why we are here for you to give an effective event planning platform which is virtual. We will organize and plan your event fully virtually whether your event is an online one or a physical one. Let's begin the journey of your event by planning and organizing it virtually with our help."
            </p>

            <br/> <br/> <br/>

            <div>
                    <h2>Host your event </h2>
                    <br/> <br/>
                    <Popup
                        trigger={<Button variant="outline-primary" size="lg" block>Host</Button>}
                        modal
                        closeOnDocumentClick
                    >
                        <AddNewEvent/>
                    </Popup>
                    
            </div>
     </div>
      </Container>
  </Styles>
        
    )

