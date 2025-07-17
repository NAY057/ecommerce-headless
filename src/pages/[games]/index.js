export { default } from "./game";
import { Game } from "@/api";
// las importaciones de paginas siempre tiene que ser default

export async function getServerSideProps(context) {
	// esta funcion se debe llamar asi por convencion
	// y su funcion es enviar datos al front de next,
	// es decir que si imprimimos un log aqui este se vera en la consola del servidor

	const {
		params: { games },
	} = context; //ojo aqui se esta haciendo la tecnica de doble destructurin

	const gameCtrl = new Game();
	const response = await gameCtrl.getBySlug(games);
	console.log(response, "GAMESSS");
	return {
		props: {
			game: response,
		},
	};
}
