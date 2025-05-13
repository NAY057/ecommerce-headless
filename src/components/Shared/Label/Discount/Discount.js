import styles from "./Discount.module.scss";
import classNames from "classnames";

export function Discount(props) {
	const { children, className } = props;
	// esta forma de usar el classNames hace que los estilos se reciban en el componente si se envian, de los
	// contrario no se aplica ningun estilo
	return (
		<span
			className={classNames(styles.labelDiscount, {
				[className]: className,
			})}
		>
			{children}
		</span>
	);
}
