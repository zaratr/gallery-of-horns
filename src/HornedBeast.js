//1. start by creating a class component. Always start by importing React.
import React from 'react';
//2. Declare the Class Component.
class HornedBeast extends React.Component
{
    render()
    {
        return(
            <>
            <h2>Title: {this.props.title}</h2>
            <img src={this.props.imageUrl} alt='ImageURL Tag' title={this.props.title}></img>
            <p>Description: {this.props.description}</p>
            </>
        );
    }
}

//3. export class 
export default HornedBeast;