import { useEffect, useState, createContext } from "react";
import { Cart } from "@/api";

export const CartContext = createContext();

export function CartProvider(props) {
	const cartCtrl = new Cart();
	const { children } = props;
	const [cart, setCart] = useState(null);
	const [total, setTotal] = useState(cartCtrl.count());

	useEffect(() => {
		setCart(cartCtrl.getAll);
	}, []);

	const addCart = (gameId) => {
		cartCtrl.add(gameId);
		refreshTotalCart();
	};

	const changeQuantityItem = (documentId, quantity) => {
		cartCtrl.changeQuantity(documentId, quantity);
		refreshTotalCart();
	};

	const deleteItem = (documentId) => {
		cartCtrl.delete(documentId);
		refreshTotalCart();
	};

	const deleteAllItems = () => {
		cartCtrl.deleteAll();
		refreshTotalCart();
	};

	const refreshTotalCart = () => {
		setTotal(cartCtrl.count());
		setCart(cartCtrl.getAll);
	};

	const data = {
		cart,
		addCart,
		total,
		deleteItem,
		deleteAllItems,
		changeQuantityItem,
	};

	return (
		<CartContext.Provider value={data}>{children} </CartContext.Provider>
	);
}
