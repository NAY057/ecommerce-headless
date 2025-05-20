import styles from "./GridGames.module.scss";
import Link from "next/link";
import { map } from "lodash";
import { Label } from "@/components/Shared";
import { fn } from "@/utils";

export function GridGames(props) {
	const { games } = props;
	// console.log(games, "yeeeahhh");

	return (
		<div className={styles.gridGames}>
			{map(games, (game) => (
				<Link key={game.id} href={game.slug} className={styles.game}>
					<div>
						<img src={game.cover.url} />
						{game.discount > 0 && (
							<Label.Discount className={styles.discount}>
								{`-${game.discount}%`}
							</Label.Discount>
						)}
					</div>

					<div>
						<span>{game.title}</span>
						<span className={styles.price}>
							${fn.calcDiscountedPrice(game.price, game.discount)}
						</span>
					</div>
				</Link>
			))}
		</div>
	);
}
