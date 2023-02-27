import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import styles from "./Comment.module.scss";
export default function Comment({ img, nombre, comentario, starts }) {
	let estrellas = [];

	for (let i = 0; i < starts; i++) {
		estrellas.push(<AiFillStar />);
	}

	return (
		<div className="text-center d-flex flex-column  align-items-center mt-5">
			<div className={styles.img}>
				<Image
					src={img}
					alt="foto de perfil"
					width={100}
					height={100}
					loading="lazy"
				/>
			</div>
			<div className={styles.name}>{nombre}</div>
			{/* <hr /> */}

			<div className={styles.comment}>
				<i>{comentario}</i>
			</div>
			<div className={styles.stars}>{estrellas.map((s) => s)}</div>
		</div>
	);
}
