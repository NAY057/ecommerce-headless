import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import { GridGames, Separator, NoResult } from "@/components/Shared";

export default function PlatformPage(props) {
	const { games, platform, pagination } = props;
	const hasProducts = size(games) > 0;
	console.log(hasProducts);

	return (
		<>
			<BasicLayout relative>
				<Container>
					<Separator height={50} />

					<h2>{platform.title}</h2>
					<>
						{hasProducts ? (
							<>
								<GridGames games={games} />
								<Separator height={30} />
							</>
						) : (
							<NoResult
								text={`La categoria ${platform.title} aun no tiene productos`}
							/>
						)}
					</>

					<Separator height={100} />
				</Container>
			</BasicLayout>
		</>
	);
}
