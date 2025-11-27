import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Game } from "@/api";
import { CartLayout } from "@/layouts";
import { useCart } from "@/hooks";
import { Cart } from "@/components/Cart";

const gameCtrl = new Game();

export default function CartPage() {
	const {
		query: { step = 1 },
	} = useRouter();
	const currentStep = Number(step);
	const [games, setGames] = useState(null);
	const { cart } = useCart();

	useEffect(() => {
		(async () => {
			try {
				const data = [];
				if (cart) {
					for await (const item of cart) {
						const response = await gameCtrl.getGameById(
							item.documentId
						);
						data.push({
							...response.data,
							quantity: item.quantity,
						});
					}
					console.log(data);
					setGames(data);
				}
			} catch (error) {
				console.error(error);
			}
		})();
	}, [cart]);

	// el && es un condicional corto
	return (
		<>
			<CartLayout>
				{currentStep === 1 && <Cart.StepOne games={games} />}
				{currentStep === 2 && <Cart.StepTwo games={games} />}
				{currentStep === 3 && <p>Step THREE</p>}
			</CartLayout>
		</>
	);
}
