import styles from "./StepOne.module.scss";
import { Carrito } from "./Carrito";
import { Resume } from "./Resume";
export function StepOne(props) {
	const { games } = props;
	return (
		<div className={styles.stepOne}>
			<div className={styles.center}>
				<Carrito games={games} />
			</div>
			<div className={styles.right}>
				<Resume games={games} />
			</div>
		</div>
	);
}
