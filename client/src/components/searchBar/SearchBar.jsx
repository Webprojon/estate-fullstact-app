import { useState } from "react";
import "../../components/searchBar/searchBar.scss";

const types = ["buy", "rent"];

export default function SearchBar() {
	const [query, setQuery] = useState({
		type: "buy",
		location: "",
		minPrice: 0,
		maxPrice: 0,
	});

	const switchType = (val) => {
		setQuery((prev) => ({ ...prev, type: val }));
	};

	return (
		<div className="searchBar">
			<div className="type">
				{types.map((type) => (
					<button key={type} onClick={() => switchType(type)} className={`${query.type === type ? "active" : ""}`}>
						{type}
					</button>
				))}
			</div>
			<form>
				<input type="text" name="location" placeholder="City Location" />
				<input type="number" min={0} max={10000000} name="minPrice" placeholder="Min Price" />
				<input type="number" name="maxPrice" min={0} max={10000000} placeholder="Max Price" />
				<button>
					<img src="/search.png" alt="search icon" />
				</button>
			</form>
		</div>
	);
}
