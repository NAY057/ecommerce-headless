import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd, Seo } from "@/components/Shared";
import { Container } from "semantic-ui-react";
import { useCart } from "@/hooks";

const platformsId = {
	playStation: 1,
	xbox: 2,
	nintendo: 3,
	pc: 4,
};
export default function HomePage() {
	return (
		<>
			<Seo />
			<BasicLayout>
				{/* <h1>Estamos en la Home</h1> */}
				<Home.BannerLastGamePublished />
				<Separator height={100} />
				<Container>
					<Home.LatestGames title="ultimos lanzamientos" />
				</Container>
				<Separator height={100} />
				<BarTrust />
				<Separator height={100} />
				<Container>
					<Home.LatestGames
						title="PlayStation"
						limit={3}
						platformId={platformsId.playStation}
					/>
				</Container>
				<Separator height={100} />
				<BannerAd
					title="Registrate u obten los mejotes precios"
					subtitle="¡Compara con otros juegos y elige el tuyo!"
					btnTitle="Entrar ahora"
					btnLink="/account"
					image="/images/img01.png"
				/>
				<Separator height={50} />
				<Container>
					<Home.LatestGames
						title="Xbox"
						limit={3}
						platformId={platformsId.xbox}
					/>
				</Container>
				<Separator height={100} />
			</BasicLayout>
		</>
	);
}
