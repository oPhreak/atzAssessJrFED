import Grid from "@mui/material/Grid";
import Panel from "./Panel";


function RenderPanels(props) {
    const panels = props.products;


    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns ={{ xs: 4, sm: 6, md: 12}}>
            {Array.from(panels).map((panel, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Panel
                        img = {panel.img}
                        brand = {panel.brand}
                        name = {panel.name}
                        price = {panel.price}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default RenderPanels;