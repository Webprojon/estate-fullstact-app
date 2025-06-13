import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "../profilePage/profilePage.scss";

export default function ProfilePage() {
	return (
		<div className="profilePage">
			<div className="details">
				<div className="wrapper">
					<div className="title">
						<h1>User Information</h1>
						<button>Update Profile</button>
					</div>
					<div className="info">
						<span>
							Avatar:
							<img
								src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
								alt="user img"
							/>
						</span>
						<span>
							Username: <b>John Doe</b>
						</span>
						<span>
							E-main: <b>john@gmail.com</b>
						</span>
					</div>
					<div className="title">
						<h1>My List</h1>
						<button>Create New Post</button>
					</div>
					<List />
					<div className="title">
						<h1>Saved List</h1>
					</div>
					<List />
				</div>
			</div>

			<div className="chatContainer">
				<div className="wrapper">
					<Chat />
				</div>
			</div>
		</div>
	);
}
