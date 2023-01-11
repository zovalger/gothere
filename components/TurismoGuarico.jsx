import Image from "next/image";
import Link from "next/link";
import styles from "./TurismoGuarico.module.scss";

export default function TurismoGuarico() {
	return (
		<section className="row mb-5 ">
			<div className="col-lg-6 col-md-12 mb-5 ">
				<div className={styles.imgContainer}>
					<div className={styles.img_item}>
						<Image
							src="/esteros-de-camaguan-2.jpg"
							alt="esteros-de-camaguan-2.jpg"
							width={228}
							height={320}
						/>
					</div>

					<div className={styles.img_item}>
						<Image
							src="/evening-2.jpg"
							alt="evening-2.jpg"
							width={328}
							height={287}
						/>
					</div>
				</div>
			</div>

			<div className=" col-lg-6 col-md-12  d-flex flex-column justify-content-center">
				<h2>
					<span className="d-block fw-normal display-6">El turismo en</span>
					<span className={`${styles.guaricoWord} d-block display-3 fw-bold`}>
						guarico
					</span>
				</h2>
				<p>
					El estado Guárico tiene muchas bellezas que ofrecer en materia
					turística, es uno de los estados privilegiados de Venezuela por su
					ubicación y por su atractivo en recursos naturales. Sabanas,
					balnearios, morros escarpados y ríos imponentes.
				</p>
				<p>Existen muchos monumentos naturales asi como parques tales como:</p>
				<ul>
					<li>Aguas termales de San Juan de Los Morros</li>
					<li>Aguas termales de Gurumen</li>
					<li>Parque Nacional Aguaro - Guariquito</li>
					<li>Parque Nacional Guatopo</li>
					<li>Monumento Natural Arístides Rojas (Morros de San Juan)</li>
					<li>Embalse de Tierra Blanca</li>
				</ul>
			</div>
		</section>
	);
}
