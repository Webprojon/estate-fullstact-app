import "../map/map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

export default function Map({ items }) {
	return (
		<MapContainer center={[52.4797, -1.90269]} zoom={6} scrollWheelZoom={false} className="map">
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{items.map((item) => (
				<Pin key={item.id} item={item} />
			))}
		</MapContainer>
	);
}
