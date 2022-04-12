//1. start by creating a class component. Always start by importing React.
import React from 'react';
import './HornedBeast.css';
import{Card} from 'react-bootstrap';
import{Button} from 'react-bootstrap';
//2. Declare the Class Component.
class HornedBeast extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            favorites: 0,
        }
    }
    myFav = () => {
        this.setState({
        favorites : this.state.favorites + 1
        });
    }
    render()
    {
        return(
            <>
            <Card.Img class="image" variant = "top" alt={this.props.title} src={this.props.image_url}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text> {this.state.favorites}</Card.Text>
                <Card.Text>{this.props.description}</Card.Text>
                <Button
                variant="primary"
                className='glow-on-hover'
                onClick={this.myFav}>
                </Button>
            </Card.Body>
            </>
        );
    }
}

//3. export class 
export default HornedBeast;