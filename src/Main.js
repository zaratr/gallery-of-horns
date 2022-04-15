import { findByLabelText } from "@testing-library/react";
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

import HornedBeast from "./HornedBeast";
import SelectedBeast from './SelectedBeast';
import "./Main.css";
import { Form } from "react-bootstrap";

class Main extends React.Component
{
    constructor(props)//constructor gains access to use props
    {
        super(props);//uses this to pass the values. if super() will make all undefined but they exist.
        // Must use super(props) to gain the values
        this.state = {
            showModal: false,
            //data: this.props.data,
            image_url: '',
            description: '',
            title: '',
            data: this.props.data,
            numberOfHorns: this.props.data
        };
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }
    openModal = (title, description, image_url) =>
    {
        this.setState({
        showModal: true,
        image_url: image_url,
        description: description,
        title: title
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        const targetedValue = parseInt(e.target.value);
        let newArr = this.props.data.filter(element => element.horns === targetedValue);
            //{
            //if(targetedValue === 1) return element.horns === targetedValue;
            //if(targetedValue === 2) return element.horns === targetedValue;
            //else//targetedValue === 3 or more)
            //return true;
        //});
        this.setState({data : newArr});
    }

    mainStyle = 
    {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    }   
    render()
    {
            return (
                <main style={this.mainStyle}>
                    <SelectedBeast
                    showModal={this.state.showModal}
                    hideModal={this.hideModal}
                    image_url={this.state.image_url}
                    description={this.state.description}
                    title={this.state.title}
                    />
                    <Form>
                        <Form.Label>Show Animal count with horns.</Form.Label>
                        <Form.Group>
                            <Form.Select onChange={this.handleSubmit}>
                                <option value='0'>All</option>
                                <option value='1'>One</option>
                                <option value='2'>Two</option>
                                <option value='3'>Three or More</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <Container>
                        <Row xs={1} md={3} lg={4}>
                            {this.state.data.map((animal, index) =>(
                                <Col key={index}>
                                    <HornedBeast 
                                    title={animal.title}
                                    name={animal.name}
                                    image_url={animal.image_url}
                                    description={animal.description}
                                    horns={animal.horns}
                                    key={index}
                                    openModal={this.openModal}
                                    animal={animal}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </main>
        );
    }
}
export default Main;