import { forEach } from "lodash";
import { ENV, authFetch } from "@/utils";

export class Cart {
	add(documentId) {
		const games = this.getAll();

		const objIndex = games.findIndex(
			(game) => game.documentId === documentId
		);

		if (objIndex < 0) {
			games.push({
				documentId: documentId,
				quantity: 1,
			});
		} else {
			const game = games[objIndex];
			games[objIndex].quantity = game.quantity + 1;
		}

		localStorage.setItem(ENV.CART, JSON.stringify(games));
	}

	getAll() {
		const response = localStorage.getItem(ENV.CART);
		if (!response) {
			return [];
		} else {
			return JSON.parse(response);
		}
	}

	count() {
		const response = this.getAll();
		let count = 0;
		forEach(response, (item) => {
			count += item.quantity;
		});

		return count;
	}
}
