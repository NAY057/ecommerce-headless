import styles from "./HeaderWallpaperGame.module.scss";
import { Image } from "semantic-ui-react";
export function HeaderWallpaperGame(props) {
	const { image } = props;
	return (
		<div className={styles.headerWallpaper}>
			<Image src={image} />
		</div>
	);
}
