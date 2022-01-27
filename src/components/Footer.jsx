import "./styles/Footer.css";

function Footer() {


    return (
        <section>
           <section className="footer-info">
                <section className="footer-functionals">
                    <section className="footer-heading">
                        SHOPPING IN:
                    </section>
                    <section className="region-select">
                        Canada, $CAD, EN
                    </section>
                    <section className="footer-heading">
                        JOIN OUR MAILING LIST
                    </section>
                    <form>
                        <label for="email"> Enter Email</label>
                        <input type="text" id="email" name="email" />
                    </form>

                </section>

                <section className="footer-info-left">
                    <section className="footer-heading">
                        GET HELP
                    </section>
                    <section className="footer-links">
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
                    </section>        
                </section>

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

            </section>



        </section>
    );
}

export default Footer;