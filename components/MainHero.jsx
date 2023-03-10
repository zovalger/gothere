import Image from "next/image";

import styles from "./MainHero.module.scss";

export default function MainHero({ urlImage }) {
	return (
		<div className={`${styles.container} container-fluid`}>
			<div className={`${styles.info} container text-center text-white `}>
				<Image
					className={`${styles.logo} w-75`}
					src={urlImage}
					alt="logo"
					width={200}
					height={200}
					priority
				/>

				<h1 className="display-4 fw-normal">
					Conoce y disfruta de <strong>Guárico</strong>
				</h1>
				<div className="col-8 mx-auto">
					<p className="lead">
						Nosotros nos encargamos de la planificación mientras tú te diviertes
						en esta llanura
					</p>
				</div>
			</div>
		</div>
	);
}
