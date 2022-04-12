import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component
{
    render()
    {
        let beasts = [];
        this.props.data.forEach((animal, index) =>{
                beasts.push(
                <HornedBeast 
                title={animal.title}
                name={animal.name}
                image_url={animal.image_url}
                description={animal.description}
                horns={animal.horns}
                key={index}
                />
                )
        });
        return (
            <main>{beasts}</main>
        );
    }
}
export default Main;