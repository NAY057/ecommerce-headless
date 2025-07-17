import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";

// estos props vienen de lo que se esta mandando en el index.js que esta en estam misma ruta
export default function GamePage(props) {
	const { game } = props;
	console.log(props);

	return (
		<>
			<BasicLayout>
				<Game.HeaderWallpaperGame image={game.wallpaper.url} />
			</BasicLayout>
		</>
	);
}
