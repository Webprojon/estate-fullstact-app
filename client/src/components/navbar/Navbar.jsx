import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const user = false;
	return (
		<nav>
			<div className="left">
				<Link to="/" className="logo">
					<img src="/logo.png" alt="logo img" />
					<span>Estate</span>
				</Link>
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
			</div>
			<div className="right">
				{user ? (
					<div className="user">
						<img
							src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
							alt="user img"
						/>
						<span>John Doe</span>
						<Link to="/profile" className="profileBtn">
							<div className="notification">2</div>
							<span>Profile</span>
						</Link>
					</div>
				) : (
					<>
						<Link to="/login" className="authBtn">
							Sign in
						</Link>
						<Link to="/register" className="register authBtn">
							Sign up
						</Link>
					</>
				)}
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
