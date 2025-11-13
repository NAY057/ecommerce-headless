import { Icon, Image, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { fn } from "@/utils";
import { useCart } from "@/hooks";
import styles from "./Carrito.module.scss";
import { use } from "react";

export function Carrito(props) {
	const { games } = props;
	const { changeQuantityItem, deleteItem } = useCart();
	const options = Array.from({ length: 10 }, (_, index) => {
		const number = index + 1;
		return { key: number, text: String(number), value: number };
	});
	return (
		<div className={styles.basket}>
			<h2>Carrito</h2>
			<div className={styles.block}>
				{map(games, (game) => (
					<div key={game.id} className={styles.product}>
						<Image src={game.cover.url} />
						<div>
							<div className={styles.info}>
								<div>
									<p>{game.title}</p>
									<p>{game.platform.title}</p>
								</div>
								<Icon
									name="trash alternate online"
									link
									onClick={() => deleteItem(game.documentId)}
								/>
							</div>
							<div className={styles.quantity}>
								<Dropdown
									className="number"
									options={options}
									selection
									value={game.quantity}
									compact
									onChange={(_, data) =>
										changeQuantityItem(
											game.documentId,
											data.value
										)
									}
								/>
								<span>
									$
									{fn.calcDiscountedPrice(
										game.price,
										game.discount
									)}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
