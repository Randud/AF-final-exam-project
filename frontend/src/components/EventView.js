import React, { Component } from 'react';
import axios from 'axios';
import { environment } from '../environment';
import TableRow from './ItemList';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export default class EventView extends Component {

    constructor(props) {
        super(props);
        this.state = {

            EventView: []
            // _id: props._id,
            // name: '',
            // description: '',
            // venue: '',
            // date: '',
            // time: '',
            // phone: '',
            // social: '',

        };
    }

    componentDidMount() {
        axios
          .get(environment.baseURL + '/events/getall')
          .then((response) => {
            this.setState({ EventView: response.data });
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      tabRow() {
        return this.state.EventView.map(function (object, i) {
          return <TableRow obj={object} key={i} />;
        });
      }

    render() {
        return (
            <div>
        <Container >
        <Row  className="justify-content-md-center">
            <Col md="auto" >{this.tabRow()}</Col>
        </Row>
        </Container>

            </div>
        );
    }
}


