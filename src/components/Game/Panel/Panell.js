import { Button, Icon, Container, Image } from "semantic-ui-react";
import { fn } from "@/utils";
import styles from "./Panel.module.scss";
import { WishListIcon } from "@/components/Shared";
import { useCart } from "@/hooks";
import { useState } from "react";
export function Panell(props) {
	const { game } = props;
	const buyPrice = fn.calcDiscountedPrice(game.price, game.discount);
	const { addCart } = useCart();
	const [loading, setLoading] = useState(false);

	const addCartWrapper = () => {
		setLoading(true);
		addCart(game.id);

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};
	return (
		<Container className={styles.panel}>
			<div className={styles.imgContainer}>
				<Image src={game.cover.url} />
			</div>

			<div className={styles.actionsContainer}>
				<div>
					<h2>{game.title}</h2>
					<div className={styles.moreInfo}>
						<span>
							<Image src={game.platform.icon.url} />
							{game.platform.title}
						</span>
						<span>
							<Icon name="check" />
							En stock
						</span>
					</div>
					<div className={styles.price}>
						{game.discount > 0 && (
							<>
								<span className={styles.originalPrice}>
									<Icon name="tag" />${game.price}
								</span>
								<span className={styles.discount}>
									-{game.discount}%
								</span>
							</>
						)}
						<span className={styles.price}>${buyPrice}</span>
					</div>
					<Button
						primary
						fluid
						onClick={addCartWrapper}
						loading={loading}
					>
						Comprar ahora
					</Button>
					<WishListIcon gameId={game.id} className={styles.heart} />
				</div>
			</div>
		</Container>
	);
}
