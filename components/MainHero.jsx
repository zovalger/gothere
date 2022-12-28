import Image from "next/image";

import styles from "./MainHero.module.scss";

export default function MainHero() {
	return (
		<div className={`${styles.container} container-fluid`}>
			<div className={`${styles.info} container text-center text-white `}>
				<Image
					className="w-75"
					src="/GoThere-white.png"
					alt="logo gothere"
					width={1500}
					height="20"
				/>
				{/* </div> */}
				<h1 className="display-4 fw-normal">
					Conoce y disfruta de <strong>Guárico</strong>
				</h1>
				<div className="col-7 mx-auto">
					<p className="lead ">
						Nosotros nos encargamos de la planificación mientras tu te diviertes
						en esta llanura
					</p>
				</div>
			</div>
		</div>
	);
}
