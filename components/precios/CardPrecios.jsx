import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import cardStyle from "./CardPrecios.module.scss";

export default function CardPrecios() {
	return (
		<div className={`${cardStyle.container} ${cardStyle.v2}`}>
			<h3>basic</h3>
			<div className={cardStyle.subtitle}>pequena descripcion</div>

			{/* <hr /> */}

			<div className={cardStyle.amount}>89.99$</div>

			<Button>comprar</Button>

			<div className={cardStyle.details}>
				<ul>
					<li>descipcion de </li>

					<li>todo el paquete</li>
				</ul>
			</div>
		</div>
	);
}
