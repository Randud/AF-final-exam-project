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
       
            <div>
                 <Card style={{ width: '38rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.obj.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.obj.venue}</Card.Subtitle>
                    <Card.Text>
                    {this.props.obj.description}
                    </Card.Text>
                    <Card.Text>
                        Date - {this.props.obj.date} <br/>
                        Time - {this.props.obj.time} <br/>
                        Contact Number - {this.props.obj.phone}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.obj.social}</Card.Subtitle>
                    <div style={{ marginLeft: '190px'}}> <Button variant="outline-danger">DELETE</Button><Button style={{ marginLeft: '30px'}} variant="outline-info">EDIT</Button></div>
                </Card.Body>
                </Card>
                <br/><br/>
            </div>
           
        );
    }
}

export default ItemList;
