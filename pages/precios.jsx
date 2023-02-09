import Layout from "../components/layout/layout";
import CardPrecios from "../components/precios/cardPrecios";
import Button from "react-bootstrap/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";

import cardStyle from "../components/precios/CardPrecios.module.scss";

export default function precios() {
	return (
		<Layout>
			<div className="container">
				<h1 className="text-center">nuestros precios</h1>

				<p className="text-center">
					Nuestros precios se ajustan a tus necesidades
				</p>
				<div className="row">
					<div className="col-lg-4 col-sm-12">
						<div className={`${cardStyle.container} ${cardStyle.v1}`}>
							<h3>Basic</h3>
							<div className={cardStyle.subtitle}>pequena descripcion</div>

							{/* <hr /> */}

							<div className={cardStyle.amount}>
								99.<span>99</span>$
							</div>
							<Button>comprar</Button>

							<div className={cardStyle.details}>
								<ul>
									<li>
										<AiOutlineCheckCircle /> item
									</li>
									<li>
										<AiOutlineCheckCircle /> item
									</li>
									<li>
										<AiOutlineCheckCircle /> item
									</li>
									<li>
										<AiOutlineCheckCircle /> item
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<div className={`${cardStyle.container} ${cardStyle.v2}`}>
							<h3>Premium</h3>
							<div className={cardStyle.subtitle}>pequena descripcion</div>

							{/* <hr /> */}

							<div className={cardStyle.amount}>
								199.<span>99</span>$
							</div>
							<Button>comprar</Button>

							<div className={cardStyle.details}>
								<ul>
									<li>
										<AiOutlineCheckCircle /> descipcion de
									</li>

									<li>todo el paquete</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<div className={`${cardStyle.container} ${cardStyle.v3}`}>
							<h3>Enterprise </h3>
							<div className={cardStyle.subtitle}>pequena descripcion</div>

							{/* <hr /> */}

							<div className={cardStyle.amount}>
								299.<span>99</span>$
							</div>

							<Button>comprar</Button>

							<div className={cardStyle.details}>
								<ul>
									<li>
										<AiOutlineCheckCircle /> descipcion de
									</li>

									<li>todo el paquete</li>
								</ul>
							</div>
						</div>{" "}
					</div>
				</div>
			</div>
		</Layout>
	);
}
