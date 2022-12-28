import Image from "next/image";
import styles from "./CardService.module.scss";

export default function CardService({urlImg, title}) {
	return (
		<div className={`${styles.container} `}>
			<Image
				src={urlImg}
				alt="imagen de servicio"
				width={400}
				height={500}
			/>

			<div className={styles.name}>
				<span>{title}</span>
			</div>
		</div>
	);
}
