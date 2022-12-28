import Image from "next/image";

import styles from "./ServiceGeneral.module.scss";
import ServiceGeneralItem from "./ServiceGeneralItem";
import { FaBed, FaUtensils, FaSwimmingPool, FaBus } from "react-icons/fa";

import { RiGuideFill } from "react-icons/ri";

export default function ServiceGeneral() {
	return (
		<div className={`${styles.hero}`}>
			<div className="container ">
				<div className="row justify-content-end">
					<div
						className={`${styles.card} text-white col-xl-3 col-lg-4 col-md-6 col-sm-12 bg-primary`}
					>
						<h2 className="mb-3">que te ofrecemos?</h2>

						<p className="mb-4 ">
							ofrecemos un paquete de servicios todo incluido en la region de
							sanjuan de los morros que abarca los siguiente aspectos
						</p>

						<div className="row">
							<div className="col-6 ">
								<ServiceGeneralItem Icon={FaBed} text="Habitacion" />
								<ServiceGeneralItem Icon={FaUtensils} text="Comida" />
								<ServiceGeneralItem Icon={FaSwimmingPool} text="Piscina" />
							</div>

							<div className="col-6 ">
								<ServiceGeneralItem Icon={FaBus} text="Trasporte" />
								<ServiceGeneralItem Icon={RiGuideFill} text="Guias" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
