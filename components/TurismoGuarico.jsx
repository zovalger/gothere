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
							width={400}
							height={500}
						/>
					</div>

					<div className={styles.img_item}>
						<Image
							src="/evening-2.jpg"
							alt="evening-2.jpg"
							width={400}
							height={500}
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
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
					harum nostrum unde sapiente minima explicabo at iste, tempora iusto
					eveniet aut. Facilis libero exercitationem quia dolor deleniti fugit,
					iusto nesciunt!
				</p>
			</div>
		</section>
	);
}
