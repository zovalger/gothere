import Image from "next/image";
import styles from "./CardService.module.scss";

export default function CardService({urlImg, title}) {
	return (
		<div className={`${styles.container} `}>
			<Image
				src={urlImg}
				alt="imagen de servicio"
				width={300}
				height={300}
				loading='lazy'
			/>

			<div className={styles.name}>
				<span>{title}</span>
			</div>
		</div>
	);
}
