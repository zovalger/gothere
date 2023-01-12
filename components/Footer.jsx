import Image from "next/image";
import styles from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="footer mt-auto py-5 bg-white">
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-md-4 col-sm-12  mb-5 ">
						<Image
							className={styles.logo}
							src="/GoThere-black.svg"
							alt="logo"
							width={200}
							height={200}
						/>
					</div>

					<div className="col-md-8 col-sm-12 text-center">
						<h4>siguenos en nuestras redes sociales</h4>

						<span class="text-muted mb-2 d-block">
							para que estes informado de todas nuestras actividades siguenos en
							las siguientes redes sociales
						</span>

						<div className="display-5 d-flex justify-content-evenly">
							<FaInstagram />
							{/* <FaInstagram />
							<FaInstagram /> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
