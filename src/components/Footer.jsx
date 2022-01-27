import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./styles/Footer.css";

function Footer() {


    return (
        <section className="footer-all">
           <Grid container spacing={2} direction="row" className="footer-info">
                <Grid container item direction="column" className="footer-functionals">
                    <Grid item xl={0} className="footer-heading">
                        SHOPPING IN:
                    </Grid>
                    <Grid item className="region-select">
                        Canada, $CAD, EN
                    </Grid>
                    <Grid item className="footer-heading">
                        JOIN OUR MAILING LIST
                    </Grid>
                    <Grid item >
                        <form>
                            <input type="text" id="emailID" name="email" placeholder="Enter Email"/>
                        </form>
                    </Grid>

                </Grid>

                <Grid container item direction="column" className="footer-info-left">
                    <Grid className="footer-heading">
                        GET HELP
                    </Grid>
                    <Grid className="footer-links">
                        Live Chat Now
                        <br />
                        Contact Us
                        <br />
                        Shipping
                        <br />
                        Returns & Exchanges
                        <br />
                        Payment & Security
                        <br />
                        Special Orders
                        <br />
                        Size Guide
                    </Grid>        
                </Grid>

                <section className="footer-info-center">
                    <section className="footer-heading">
                        MY ACCOUNT
                    </section>
                    <section className="footer-get-help">
                        Track an Order
                        <br />
                        Order History
                        <br />
                        My Wishlist
                        <br />
                        Find a Wishlist
                        <br />
                        Account Settings
                        <br />
                        Sign Out
                    </section>
                </section>

                <section className="footer-info-right">
                    <section className="footer-heading">
                    ABOUT US
                    </section>
                    <section className="footer-about-us">
                        Boutiques
                        <br />
                        Careers
                        <br />
                        Gift Cards
                        <br />
                        About Aritzia
                        <br />
                        Corporate Responsibility
                        <br />
                        Accessibility
                        <br />
                        Investor Relations
                        <br />
                        Artistic License
                    </section>
                </section>

            </Grid>



        </section>
    );
}

export default Footer;