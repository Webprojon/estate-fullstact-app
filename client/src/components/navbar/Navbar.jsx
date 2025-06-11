import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<div className="left">
				<Link to="/" className="logo">
					<img src="/logo.png" alt="logo img" />
					<span>Estate</span>
				</Link>
				<Link to="/">Home</Link>
				<Link to="/list">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/agents">Agents</Link>
			</div>
			<div className="right">
				<Link to="/login">Sign in</Link>
				<Link to="/register" className="register">
					Sign up
				</Link>
				<div className="menuIcon">
					<img src="/menu.png" alt="menu icon" onClick={() => setOpen(!open)} />
				</div>
				<div className={`${open ? "menu active" : "menu"}`}>
					<Link to="/">Home</Link>
					<Link to="/list">About</Link>
					<Link to="/contact">Contact</Link>
					<Link to="/agents">Agents</Link>
					<Link to="/login">Sign in</Link>
					<Link to="/register">Sign up</Link>
				</div>
			</div>
		</nav>
	);
}
