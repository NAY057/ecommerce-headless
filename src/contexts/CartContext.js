import { useEffect, useState, createContext } from "react";
import { Cart } from "@/api";

export const CartContext = createContext();

export function CartProvider(props) {
	const cartCtrl = new Cart();
	const { children } = props;
	const [cart, setCart] = useState(null);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setCart(cartCtrl.getAll);
	}, []);

	const addCart = (gameId) => {
		cartCtrl.add(gameId);
	};

	const data = {
		cart,
		addCart,
		total,
		deleteItem: () => {},
		deleteAllItems: () => {},
		changeQuantityItem: () => {},
	};

	return (
		<CartContext.Provider value={data}>{children} </CartContext.Provider>
	);
}
