import "./styles/Header.css";

function Header() {
    return (
        <div>
            <h1 data-testid="titleTest" className="title-style">DRESSES</h1>
            <h2 data-testid="blurbTest" className="blurb-style">Designed for people who like compliments. Our best dresses are here.</h2>
        </div>
    );
}

export default Header;