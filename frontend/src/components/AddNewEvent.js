import React, { Component } from 'react';
import axios from 'axios';
import { environment } from '../environment';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const Styles = styled.div`
    h3{
        font-size: 25px;
        font-family: 'Roboto Slab', serif;
        color: #8a8780;
        text-align: center;

    }
  
`;


class AddNewEvent extends Component {
    constructor(props) {
        super(props);
    }

    onSubmitHandle = (e) => {

        e.preventDefault();
        axios({
            method: 'post',
            url: environment.baseURL + `/events/create`,
            data: this.state
        }).then(res => {
            alert('Employee Added Successfully')   
        })
    }

    onChangeHandle = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <Styles>
            <div>
                <h3 >Host your Event</h3>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter event name" id="name" name="name" required onChange={this.onChangeHandle} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Venue</Form.Label>
                        <Form.Control type="text" placeholder="Enter event venue" id="venue" required name="venue" onChange={this.onChangeHandle} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter short description" id="description" required name="description" onChange={this.onChangeHandle}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Social media link</Form.Label>
                        <Form.Control  type="text" placeholder="Enter social media link" id="social" required name="social" onChange={this.onChangeHandle} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="text" placeholder="Enter event date" id="date" required name="date" onChange={this.onChangeHandle}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="text" placeholder="Enter start time" id="time"  required name="time" onChange={this.onChangeHandle}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" id="phone" required name="phone"onChange={this.onChangeHandle}/>
                        </Form.Group>
                    </Form.Row>
                    <br/>
                    <Button variant="secondary" size="lg"  type="submit" block onClick={this.onSubmitHandle}>
                        Submit
                    </Button>
                    <br/><br/>

                    </Form>
            </div>
            </Styles>
        );
    }
}

export default AddNewEvent;
