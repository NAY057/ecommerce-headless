import { Platform, Game } from "@/api";
export { default } from "./platform";

export async function getServerSideProps(context) {
	// esta funcion es nativa de next y lo que hace es traer informacion del back al front
	// para utilizarla se debe usar el nombre tal cual
	console.log(context);
	const { query, params } = context;
	// const { page = 1 } = query;
	const { platform } = params;
	const platformCtrl = new Platform();
	const responsePlatform = await platformCtrl.getBySlug(platform);

	const gameCtrl = new Game();
	const responseGame = await gameCtrl.getGameByPlatformSlug(platform, 1);
	console.log(context);
	return {
		props: {
			platform: responsePlatform,
			games: responseGame.data,
			pagination: responseGame.meta.pagination,
		},
	};
}
