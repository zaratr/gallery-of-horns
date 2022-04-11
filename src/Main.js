import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component
{
    render()
    {
        return (
            <>
                <HornedBeast title='TITLE1' imageUrl="URL" description='Animals with some horns 1'></HornedBeast>
                <HornedBeast title='TITLE 2' imageUrl="URL 2" description='Animals with some horns 2'></HornedBeast>
            </>

        );
    }
}
export default Main;