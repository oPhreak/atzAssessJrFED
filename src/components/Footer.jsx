
import "./styles/Footer.css";

function Footer() {

    function MobileFooter() {
        return ""
    }


    return (
        <div className="footer-all">
           <div className="footer-info">
                <div className="footer-functionals">
                    <div item xl={0} className="footer-heading">
                        SHOPPING IN:
                    </div>
                    <div item className="region-select">
                        Canada, $CAD, EN
                    </div>
                    <div item className="footer-heading">
                        JOIN OUR MAILING LIST
                    </div>
                    <div item >
                        <form>
                            <input type="text" id="emailID" name="email" placeholder="Enter Email"/>
                        </form>
                    </div>

                </div>

                <div container item direction="column" className="footer-info-left">
                    <div className="footer-heading">
                        GET HELP
                    </div>
                    <div className="footer-get-help">
                        Live Chat Now
                    </div>
                    <div className="footer-get-help">
                        Contact Us
                    </div>
                    <div className="footer-get-help">
                        Shipping
                    </div>
                    <div className="footer-get-help">
                        Returns & Exchanges
                    </div>
                    <div className="footer-get-help">
                        Payment & Security
                    </div>
                    <div className="footer-get-help">
                        Special Orders
                    </div>
                    <div className="footer-get-help">
                        Size Guide
                    </div>        
                </div>

                <div className="footer-info-center">
                    <div className="footer-heading">
                        MY ACCOUNT
                    </div>
                    <div className="footer-my-account">
                        Track an Order
                    </div>
                    <div className="footer-my-account">
                        Order History
                    </div>
                    <div className="footer-my-account">
                        My Wishlist
                    </div>
                    <div className="footer-my-account">
                        Find a Wishlist
                    </div>
                    <div className="footer-my-account">
                        Account Settings
                    </div>
                    <div className="footer-my-account">
                        Sign Out
                    </div>
                </div>

                <div className="footer-info-right">
                    <div className="footer-heading">
                    ABOUT US
                    </div>
                    <div className="footer-about-us">
                        Boutiques
                    </div>
                    <div className="footer-about-us">
                        Careers
                    </div>
                    <div className="footer-about-us">
                        Gift Cards
                    </div>
                    <div className="footer-about-us">
                        About Aritzia
                    </div>
                    <div className="footer-about-us">
                        Corporate Responsibility
                    </div>
                    <div className="footer-about-us">
                        Accessibility
                    </div>
                    <div className="footer-about-us">
                        Investor Relations
                    </div>
                    <div className="footer-about-us">
                        Artistic License
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="footer-black-text">
                    Privacy Policy
                </div>
                <div className="footer-black-text">
                    Privacy Policy
                </div>
                <div className="footer-black-text">
                    Privacy Policy
                </div>
                <div className="footer-black-text">
                    Privacy Policy
                </div>
            </div>

        </div>
    );
}

export default Footer;