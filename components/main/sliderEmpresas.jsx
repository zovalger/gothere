import Image from "next/image";
import styles from "./SliderEmpresas.module.scss";

export default function SliderEmpresas({ urlImg, title }) {
	return (
		<div className={`${styles.container} `}>
			<h2>Quienes confian en nosotros</h2>
		<div>
    <Image
				src={"/empresa (1).jpg"}
				alt="imagen de servicio"
				width={500}
				height={500}
			/>
			<Image
				src={"/empresa (2).jpg"}
				alt="imagen de servicio"
				width={500}
				height={500}
			/>
			<Image
				src={"/empresa (3).jpg"}
				alt="imagen de servicio"
				width={500}
				height={500}
			/>
			<Image
				src={"/empresa (4).jpg"}
				alt="imagen de servicio"
				width={500}
				height={500}
			/>
			<Image
				src={"/empresa (5).jpg"}
				alt="imagen de servicio"
				width={500}
				height={500}
			/>
    </div>
		</div>
	);
}
