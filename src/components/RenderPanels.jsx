import Grid from "@mui/material/Grid";
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
        <Grid container justifyContent="left" spacing={{ xs:2, md:3 }}>
            <div>
                {displayPanels}Í
            </div>
        </Grid>
    );
}

export default RenderPanels;