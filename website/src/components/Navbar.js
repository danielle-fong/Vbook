import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="navbar-container">
				<Link to="/">
					<h1>VBook</h1>
				</Link>
				<Link to="/">
					<h2>Home</h2>
				</Link>
			</div>
		</>
	);
};

export default Navbar;
