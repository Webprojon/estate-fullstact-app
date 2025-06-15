import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileUpdatePage() {
	const { currentUser, updateUser } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [avatar, setAvatar] = useState([]);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="profileUpdatePage">
			<div className="formContainer">
				<form onSubmit={handleSubmit}>
					<h1>Update Profile</h1>
					<div className="item">
						<label htmlFor="username">Username</label>
						<input id="username" name="username" type="text" defaultValue={currentUser.username} />
					</div>
					<div className="item">
						<label htmlFor="email">Email</label>
						<input id="email" name="email" type="email" defaultValue={currentUser.email} />
					</div>
					<div className="item">
						<label htmlFor="password">Password</label>
						<input id="password" name="password" type="password" />
					</div>
					<button>Update</button>
					{error && <span>error</span>}
				</form>
			</div>
			<div className="sideContainer">
				<img src={currentUser.avatar || "/noavatar.png"} alt="user img" className="avatar" />
			</div>
		</div>
	);
}
