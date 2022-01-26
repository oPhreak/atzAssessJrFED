import react from "react";

import Panel from "./Panel";


function RenderPanels(props) {
    const panels = props.products;

    const displayPanels = panels.map((panel, index) => {
        return (
                <Panel
                    key = {index.toString()}
                    id = {index}
                    img = {panel.img}
                    brand = {panel.brand}
                    name = {panel.name}
                    price = {panel.price}
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