import Image from "next/image";
import styles from "./Footer.module.scss";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

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
						<h4>Síguenos en nuestras redes sociales</h4>

						<span className="text-muted mb-2 d-block">
							Para que estes informado de todas nuestras actividades síguenos en
							las siguientes redes sociales
						</span>

						<div className="display-5 d-flex justify-content-evenly">
							<Link href="https://twitter.com/zovalger">
								<FaTwitter />
							</Link>
							<Link href="https://www.instagram.com/german_castro_v/">
								<FaInstagram />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}