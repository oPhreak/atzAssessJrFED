import SearchIcon from '@mui/icons-material/Search';
import "./styles/Navbar.css";

function Navbar() {
    return (
        <div className="flex-container">
            <div>
                <SearchIcon />
            </div>
            <div>
                Dresses
            </div>
            <div className="push">
                MENU
            </div>
            <div>
                BAG
            </div>
        </div>
    );
}

export default Navbar;