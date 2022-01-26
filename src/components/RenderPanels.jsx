import react from "react";

import Panel from "./Panel";


function RenderPanels(props) {
    const panels = props.products;

    const displayPanels = panels.map((index) => {
        return (
                <Panel
                    key = {index.toString()}
                    id = {index}
                    img = {panels.img}
                    brand = {panels.brand}
                    name = {panels.name}
                    price = {panels.price}
                />
        );
        });

    return(
        <div>
            {displayPanels}
        </div>
    );
}

export default RenderPanels;