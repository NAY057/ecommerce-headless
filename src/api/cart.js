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

	changeQuantity(documentId, quantity) {
		const games = this.getAll();
		const objIndex = games.findIndex(
			(game) => game.documentId === documentId
		);
		//de debe usar el documentId como identificador para lograr hacer la operaciones
		games[objIndex].quantity = quantity;
		localStorage.setItem(ENV.CART, JSON.stringify(games));
	}

	delete(documentId) {
		const games = this.getAll();
		const updateGames = games.filter(
			(game) => game.documentId !== documentId
		);
		localStorage.setItem(ENV.CART, JSON.stringify(updateGames));
	}

	deleteAll() {
		localStorage.removeItem(ENV.CART);
	}

	async paymentCart(token, products, idUser, address) {
		try {
			const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENY_ORDER}`;
			const params = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					token,
					products,
					idUser,
					addressShipping: address,
				}),
			};

			const response = await authFetch(url, params);

			return response;
		} catch (error) {
			throw error;
		}
	}
}
