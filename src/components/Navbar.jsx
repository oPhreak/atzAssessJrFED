import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";

function Navbar() {
    return (
        <Grid container>
            <Grid item xs={1}>
                <SearchIcon />
            </Grid>
            <Grid item xs>
                Dresses
            </Grid>
            <Grid item xs={1}>
                MENU
            </Grid>
            <Grid item xs={1}>
                BAG
            </Grid>
        </Grid>
    );
}

export default Navbar;