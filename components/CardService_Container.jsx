import CardService from "./CardService";
import styles from "./CardService_Container.module.scss";

export default function CardService_Container() {
	return (
		<div className={`${styles.container} container`}>
			<div className="row">
				<div className="col-lg-3 col-md-6 col-sm-12">
					<CardService title={"habitaciones"} urlImg={"/bedroom.webp"} />
				</div>

				<div className="col-lg-3 col-md-6 col-sm-12">
					<CardService title={"Piscinas"} urlImg={"/aguas-termales-2.webp"} />
				</div>

				<div className="col-lg-3 col-md-6 col-sm-12">
					<CardService title={"Comida"} urlImg={"/pabellon-1.jpg"} />
				</div>

				<div className="col-lg-3 col-md-6 col-sm-12">
					<CardService
						title={"Excursiones"}
						urlImg={"/esteros-de-camaguan-1.jpg"}
					/>
				</div>
			</div>
		</div>
	);
}
