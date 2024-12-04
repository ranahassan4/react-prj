import { Link } from "react-router-dom";
import "../CSS/navBar.css";
import logo from "../assets/ahmad/logo.png";
import user from "../assets/ahmad/User.svg";

const Navbar = () => {
  return (
    <div>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>
          🎄 <strong>Its Christmas!</strong> During December, enjoy{" "}
          <strong>33% off</strong> on Solitaire Rings and Necklaces! 🎁
        </p>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/shop">Necklace</Link>
          <Link to="/women">bracelet</Link>
          <Link to="/kids">Solitair Ring</Link>
          <Link to="/sale">wedding Ring</Link>
          <Link to="/sale">twodiamond Ring</Link>
        </div>

        <div className="nav-actions">
          <Link to="/Signin_up">
            <img src={user} alt="user logo" />
          </Link>

          <input
            type="text"
            className="search-bar"
            placeholder="Search for items..."
          />

          <Link to="/Cart" className="cart-button">
            <span> Cart </span> 🛒
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
