import { useState } from "react";
import styles from "./Gallery.module.scss";
import Slider from "react-slick";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { FullModal } from "@/components/Shared";
export function Gallery(props) {
	const { screenshots } = props;
	const screenShotClone = [...screenshots];
	const principalImage = screenShotClone.shift();
	const [show, setShow] = useState(false);
	const onOpenGallery = () => setShow((prevState) => !prevState);
	const settings = {
		dots: true,
		dotsClass: styles.dots,
		infinite: true,
		slidersToShow: 1,
		sliderToScroll: 1,
		arrows: false,
		customPaging: function (index) {
			return <Image src={screenshots[index].url} />;
		},
	};
	return (
		<>
			<div className={styles.gallery}>
				<div className={styles.principal}>
					<Image src={principalImage.url} onClick={onOpenGallery} />
				</div>
				<div className={styles.grid}>
					{map(screenShotClone, (screenshot) => (
						<div key={screenshot.id}>
							<Image
								src={screenshot.url}
								onClick={onOpenGallery}
							/>
						</div>
					))}
				</div>
			</div>
			<FullModal show={show} onClose={onOpenGallery}>
				<div className={styles.carouselContainer}>
					<Slider {...settings}>
						{map(screenshots, (screenshot) => (
							<div key={screenshot.id}>
								<Image src={screenshot.url} />
							</div>
						))}
					</Slider>
				</div>
			</FullModal>
		</>
	);
}
