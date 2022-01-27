import Grid from "@mui/material/Grid";
import Panel from "./Panel";


function RenderPanels(props) {
    const panels = props.products;

    const displayPanels = panels.map((panel, index) => {
        return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Panel
                        id = {index}
                        img = {panel.img}
                        brand = {panel.brand}
                        name = {panel.name}
                        price = {panel.price}
                    />
                </Grid>
        );
        });

    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns ={{ xs: 4, sm: 6, md: 12}}>
            <div>
                {displayPanels}
            </div>
        </Grid>
    );
}

export default RenderPanels;