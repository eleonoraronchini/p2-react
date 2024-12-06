
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="/details" style={linkStyle}>Dettagli</Link>
        </li>
      </ul>
    </nav>
  );
};


const navbarStyle = {
  backgroundColor: "#0066cc", 
  padding: "15px 30px",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const ulStyle = {
  listStyleType: "none",
  display: "flex",
  margin: 0,
  padding: 0,
};

const liStyle = {
  margin: "0 20px", 
};

const linkStyle = {
  color: "white", 
  textDecoration: "none",
  fontSize: "18px", 
  fontWeight: "bold", 
  transition: "color 0.3s ease", 
};


export default Navbar;