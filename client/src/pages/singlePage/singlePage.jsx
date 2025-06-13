import Slider from "../../components/slider/Slider";
import "../singlePage/singlePage.scss";
import { singlePostData, userData } from "../../lib/data";
import Map from "../../components/map/Map";

export default function SinglePage() {
	return (
		<div className="singlePage">
			<div className="details">
				<div className="wrapper">
					<Slider images={singlePostData.images} />
					<div className="info">
						<div className="top">
							<div className="post">
								<h1>{singlePostData.title}</h1>
								<div className="address">
									<img src="./pin.png" alt="pin icon" />
									<span>{singlePostData.address}</span>
								</div>
								<div className="price">$ {singlePostData.price}</div>
							</div>
							<div className="user">
								<img src={userData.img} alt="" />
								<span>{userData.name}</span>
							</div>
						</div>
						<div className="bottom">
							<p>{singlePostData.description}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="features">
				<div className="wrapper">
					<p className="title">General</p>
					<div className="listVertical">
						<div className="feature">
							<img src="./utility.png" alt="utility img" />
							<div className="featureText">
								<span>Utilities</span>
								<p>Renter is responsible</p>
							</div>
						</div>
						<div className="feature">
							<img src="./pet.png" alt="pet img" />
							<div className="featureText">
								<span>Pet Policy</span>
								<p>Pets Allowed</p>
							</div>
						</div>
						<div className="feature">
							<img src="./fee.png" alt="utility img" />
							<div className="featureText">
								<span>Property Fees</span>
								<p>Must have 3x the rent in total household income</p>
							</div>
						</div>
					</div>

					<p className="title">Sizes</p>
					<div className="sizes">
						<div className="size">
							<img src="./size.png" alt="size img" />
							<span>80 sqft</span>
						</div>
						<div className="size">
							<img src="./bed.png" alt="bedroom img" />
							<span>2 bedroom</span>
						</div>
						<div className="size">
							<img src="./bath.png" alt="size img" />
							<span>1 bathroon</span>
						</div>
					</div>

					<p className="title">Nearby Places</p>
					<div className="listHorizontal">
						<div className="feature">
							<img src="./school.png" alt="utility img" />
							<div className="featureText">
								<span>School</span>
								<p>250m away</p>
							</div>
						</div>
						<div className="feature">
							<img src="./bus.png" alt="pet img" />
							<div className="featureText">
								<span>Bus Stop</span>
								<p>100m away</p>
							</div>
						</div>
						<div className="feature">
							<img src="./restaurant.png" alt="utility img" />
							<div className="featureText">
								<span>Restaurant</span>
								<p>200m away</p>
							</div>
						</div>
					</div>

					<p className="title">Location</p>
					<div className="mapContainer">
						<Map items={[singlePostData]} />
					</div>

					<div className="buttons">
						<button>
							<img src="./chat.png" alt="chat img" />
							Send a Message
						</button>
						<button>
							<img src="./save.png" alt="save img" />
							Save the Place
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
