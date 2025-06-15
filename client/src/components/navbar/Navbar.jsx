import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const { currentUser } = useContext(AuthContext);

	const handleOpen = () => {
		setOpen(!open);
	};
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
				{currentUser ? (
					<div className="user">
						<img src={currentUser.avatar || "./noavatar.png"} alt="user img" />
						<span>{currentUser.username}</span>
						<Link to="/profile" className="profileBtn">
							<div className="notification">2</div>
							<span>Profile</span>
						</Link>
					</div>
				) : (
					<>
						<Link to="/login" className="loginBtn">
							Sign in
						</Link>
						<Link to="/register" className="registerBtn">
							Sign up
						</Link>
					</>
				)}
				<div className="menuIcon">
					<img src="/menu.png" alt="menu icon" onClick={handleOpen} />
				</div>
				<div className={`${open ? "menu active" : "menu"}`} onClick={handleOpen}>
					<Link to="/">Home</Link>
					<Link to="/list">About</Link>
					<Link to="/login">Sign in</Link>
					<Link to="/register">Sign up</Link>
				</div>
			</div>
		</nav>
	);
}
