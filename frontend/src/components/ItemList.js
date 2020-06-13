import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.get('http://localhost:3000/events/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
           // _id: props._id,
            // name: '',
            // description: '',
            // venue: '',
            // date: '',
            // time: '',
            // phone: '',
            // social: '',

            <div>
                <Card className="text-center">
                    <Card.Header>{this.props.obj.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                 </Card>
                 <br/><br/>
            
            </div>
           
        );
    }
}

export default ItemList;
