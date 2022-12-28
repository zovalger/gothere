import Image from "next/image";
import styles from "./TitleAndDescription.module.scss";

export default function TitleAndDescription({ title, description }) {
	return (
		<>
			<h2>{title}</h2>

			{description.map((text, i) => (
				<p key={i}> {text}</p>
			))}
		</>
	);
}
