import { useState, useEffect } from "react";
import { Game } from "@/api";
import { GridGames } from "@/components/Shared";

const gameCtrl = new Game();
// const limit = 9;
// const platformId = null;

export function LatestGames(props) {
	const { title, limit = 9, platformId = null } = props;
	const [games, setGames] = useState(null);

	useEffect(() => {
		// al user los parentesis asi (codigo aqui)() se esta haciendo una funcion anonima auto ejecutabla
		(async () => {
			try {
				const response = await gameCtrl.getLatestPublished({
					limit,
					platformId,
				});
				setGames(response.data);
			} catch (error) {
				throw error;
			}
		})();
	}, []);
	// asi solo carga el componente si hay data guardada en el estado
	if (!games) return null;

	return (
		<div>
			<h2>{title}</h2>
			<GridGames games={games} />
		</div>
	);
}
