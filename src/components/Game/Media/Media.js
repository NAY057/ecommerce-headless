import { Container } from "semantic-ui-react";
import styles from "./Media.module.scss";
import { Separator } from "@/components/Shared";
import { Video } from "./Video";

export function Media(props) {
	const { video, screenshots } = props;
	console.log(props);

	return (
		<Container>
			Media
			<Separator height={30} />
			<Video video={video} />
		</Container>
	);
}
