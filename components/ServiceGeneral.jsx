import Image from "next/image";

import styles from "./ServiceGeneral.module.scss";
import ServiceGeneralItem from "./ServiceGeneralItem";
import { FaBed, FaUtensils, FaSwimmingPool, FaBus } from "react-icons/fa";

import { RiGuideFill } from "react-icons/ri";
import Link from "next/link";

export default function ServiceGeneral() {
	return (
		<div className={`${styles.hero}`}>
			<div className="container ">
				<div className="row justify-content-end">
					<div
						className={`${styles.card} text-white col-xl-4 col-lg-4 col-md-6 col-sm-12 bg-primary`}
					>
						<h2 className="mb-3">¿Que ofrecemos?</h2>

						<p className="mb-4 ">
							Ofrecemos varios paquetes de servicios todo incluido en la región de
							San Juan de los Morros que abarca los siguientes aspectos
						</p>

						<div className="row">
							<div className="col-6 ">
								<ServiceGeneralItem Icon={FaBed} text="Habitación" />
								<ServiceGeneralItem Icon={FaUtensils} text="Comida" />
								<ServiceGeneralItem Icon={FaSwimmingPool} text="Piscina" />
							</div>

							<div className="col-6 ">
								<ServiceGeneralItem Icon={FaBus} text="Trasporte" />
								<ServiceGeneralItem Icon={RiGuideFill} text="Guías" />
							</div>
						</div>

						<Link href={"/precios"} className="btn btn-outline-light w-100 mt-5">
							Ver precios
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
