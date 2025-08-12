import styles from "./WishListIcon.module.scss";
import classNames from "classnames";
import { Icon } from "semantic-ui-react";

export function WishListIcon(props) {
	const { gameId, className } = props;
	// esta linea dentro del icon className={className(styles.WishListIcon, {[className]: className,})}
	// hace que se aplique el valor de classname si tiener valor, de lo contrario no pone nada.
	return (
		<Icon
			name="heart"
			className={classNames(styles.wishlistIcon, {
				[className]: className,
			})}
		/>
	);
}
