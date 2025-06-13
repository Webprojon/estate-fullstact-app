import { useState } from "react";
import "../slider/slider.scss";

export default function Slider({ images }) {
	const [imageIndex, setImageIndex] = useState(null);

	const changeSlide = (direction) => {
		if (direction === "left") {
			if (imageIndex === 0) {
				setImageIndex(images.length - 1);
			} else {
				setImageIndex(imageIndex - 1);
			}
		} else {
			if (imageIndex === images.length - 1) {
				setImageIndex(0);
			} else {
				setImageIndex(imageIndex + 1);
			}
		}
	};

	return (
		<div className="slider">
			{imageIndex !== null && (
				<div className="fullSlider">
					<div className="arrow">
						<img src="./arrow.png" alt="arrow icon" onClick={() => changeSlide("left")} />
					</div>
					<div className="imgContainer">
						<img src={images[imageIndex]} alt="first img" />
					</div>
					<div className="arrow">
						<img src="./arrow.png" className="right" alt="arrow icon" onClick={() => changeSlide("right")} />
					</div>
					<div className="close" onClick={() => setImageIndex(null)}>
						X
					</div>
				</div>
			)}

			<div className="bigImage">
				<img src={images[0]} alt="estate imgs" onClick={() => setImageIndex(0)} />
			</div>
			<div className="smallImages">
				{images.slice(1).map((image, index) => (
					<img src={image} alt="imgs" key={index} onClick={() => setImageIndex(index + 1)} />
				))}
			</div>
		</div>
	);
}
