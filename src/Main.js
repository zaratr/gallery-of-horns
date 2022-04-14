import { findByLabelText } from "@testing-library/react";
import React from "react";
import HornedBeast from "./HornedBeast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
import "./Main.css";

class Main extends React.Component
{
    constructor(props)//constructor gains access to use props
    {
        super(props);//uses this to pass the values. if super() will make all undefined but they exist.
        // Must use super(props) to gain the values
        this.state = {
            data: this.props.data
        };

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
                    showModal={this.props.showModal}
                    beast={this.props.beast}
                    hideModal={this.props.hideModal}
                    />
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
                                    openModal={this.props.openModal}
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