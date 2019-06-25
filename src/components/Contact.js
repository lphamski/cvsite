import React, {Component} from 'react';
import './Contact.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Contact extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { name, email,message } = this.state
        const form = await axios.post('/api/form',{
            name,
            email,
            message: message //same as just message
        })
    }


    render(){
        return(
            <div className="myContainer">
                <h4 className="contactMe">Contact Me</h4>
                
                <div className="myForm">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="name"><h5 className="labels"> Name:</h5></Label>
                            <Input
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            /> 
                        </FormGroup>

                        <FormGroup>
                                <Label for="Email"><h5 className="labels">Email: </h5></Label>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                /> 
                        </FormGroup>

                        <FormGroup>
                                <Label for="message"><h5 className="labels">Message:</h5></Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    onChange={this.handleChange}
                                /> 
                        </FormGroup>
                        <Button id="myButton">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Contact