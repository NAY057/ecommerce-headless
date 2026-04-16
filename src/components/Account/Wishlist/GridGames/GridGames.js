import Link from "next/link";
import { map } from "lodash";
import { Label, WishListIcon } from "@/components/Shared";
import { fn } from "@/utils";
import styles from "./GridGames.module.scss";
export function GridGames(props) {
	const { wishlist, onReload } = props;
	return (
		<div className={styles.gridGames}>
			{map(wishlist, (item) => {
				return (
					<div key={item.id} className={styles.game}>
						<Link href={`/${item.game.slug}`}>
							<div>
								<img
									src={item.game.cover.url}
									alt="cover img"
								/>
								{item.game.discount > 0 && (
									<Label.Discount className={styles.discount}>
										{`-${item.game.discount}%`}
									</Label.Discount>
								)}
							</div>
							<div>
								<span>{item.game.title}</span>
								<span className={styles.price}>
									{fn.calcDiscountedPrice(
										item.game.price,
										item.game.discount
									)}
									€
								</span>
							</div>
						</Link>
						<WishListIcon
							gameId={item.game.id}
							className={styles.whislistIcon}
							removeCallback={onReload}
						/>
					</div>
				);
			})}
		</div>
	);
}
