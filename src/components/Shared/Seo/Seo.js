import Head from "next/head";

export function Seo(props) {
	const {
		title = "Gaming - los mejores juegos para ti",
		description = " los mejores juagos al mejor precio",
	} = props;
	return (
		<Head>
			<title>{title}</title>
			<meta property="description" content={description} />
		</Head>
	);
}
