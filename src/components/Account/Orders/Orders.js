import { useEffect, useState } from "react";
import { map } from "lodash";
import { Order as OrderCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { NoResult } from "@/components/Shared";
import { Order } from "./Order";

const orderCtrl = new OrderCtrl();

export function Orders() {
	const [orders, setOrder] = useState(null);
	const { user } = useAuth();
	useEffect(() => {
		(async () => {
			try {
				const response = await orderCtrl.getAll(user.id);
				setOrder(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	if (!orders) return <NoResult text="No tienes ningun producto comprado" />;
	return (
		<div>
			{map(orders, (order) => (
				<Order key={order.id} order={order} />
			))}
		</div>
	);
}
