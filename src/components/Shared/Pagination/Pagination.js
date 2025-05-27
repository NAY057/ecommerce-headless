import { Pagination as PaginationSU } from "semantic-ui-react";
import { useRouter } from "next/router";
//el hook useRouter se utiliza en este caso para acceder a la urlS
import styles from "./Pagination.module.scss";

export function Pagination(props) {
	const { currentPage, totalPages } = props;
	const router = useRouter();
	const onPageChange = (_, data) => {
		const { activePage } = data;
		router.replace({ query: { ...router.query, page: activePage } });
		// aqui el router mantiene la informacion que tiene con el "...router.query" pero se modifica el
		//valor de page por la nueva pagina que se esta cliqueando
	};
	return (
		<div className={styles.container}>
			<PaginationSU
				defaultActivePage={currentPage}
				totalPages={totalPages}
				ellipsisItem={null}
				firstItem={null}
				lastItem={null}
				onPageChange={onPageChange}
			/>
		</div>
	);
}
