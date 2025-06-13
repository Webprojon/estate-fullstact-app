import { useState } from "react";
import "../chat/chat.scss";

export default function Chat() {
	const [chat, setChat] = useState(true);

	return (
		<div className="chat">
			<div className="messages">
				<h1>Messages</h1>
				<div className="message">
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
						alt="user img"
					/>
					<span>John Doe</span>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="message">
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
						alt="user img"
					/>
					<span>John Doe</span>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="message">
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
						alt="user img"
					/>
					<span>John Doe</span>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="message">
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
						alt="user img"
					/>
					<span>John Doe</span>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
				<div className="message">
					<img
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
						alt="user img"
					/>
					<span>John Doe</span>
					<p>Lorem ipsum dolor sit amet.</p>
				</div>
			</div>

			{chat && (
				<div className="chatBox">
					<div className="top">
						<div className="user">
							<img
								src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
								alt="user img"
							/>
							<span>John Doe</span>
						</div>
						<span className="close" onClick={() => setChat(null)}>
							X
						</span>
					</div>

					<div className="center">
						<div className="chatMessage">
							<p>Lorem ipsum dolor sit amet.</p>
							<span>1 hour ago</span>
						</div>
						<div className="chatMessage own">
							<p>Lorem ipsum dolor sit amet.</p>
							<span>1 hour ago</span>
						</div>
						<div className="chatMessage">
							<p>Lorem ipsum dolor sit amet.</p>
							<span>1 hour ago</span>
						</div>
						<div className="chatMessage own">
							<p>Lorem ipsum dolor sit amet.</p>
							<span>1 hour ago</span>
						</div>
						<div className="chatMessage">
							<p>Lorem ipsum dolor sit amet.</p>
							<span>1 hour ago</span>
						</div>
						<div className="chatMessage own">
							<p>Lorem ipsum dolor sit amet.</p>
							<span>1 hour ago</span>
						</div>
						<div className="chatMessage">
							<p>Lorem ipsum dolor sit amet.</p>
							<span>1 hour ago</span>
						</div>
					</div>

					<div className="bottom">
						<textarea placeholder="Write something..."></textarea>
						<button>Send</button>
					</div>
				</div>
			)}
		</div>
	);
}
