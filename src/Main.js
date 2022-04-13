import { findByLabelText } from "@testing-library/react";
import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css"

class Main extends React.Component
{
    mainStyle = 
    {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    }   
    render()
    {
        let beasts = this.props.data.map((animal, index) =>{
            return (
                <HornedBeast 
                title={animal.title}
                name={animal.name}
                image_url={animal.image_url}
                description={animal.description}
                horns={animal.horns}
                key={index}
                />
                );
        });
        return (
            <main style={this.mainStyle}>{beasts}</main>
        );
    }
}
export default Main;