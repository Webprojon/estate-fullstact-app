import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import HomePage from "./pages/homePage";

function App() {
	return (
		<div className="layout">
			<Navbar />
			<HomePage />
		</div>
	);
}

export default App;
