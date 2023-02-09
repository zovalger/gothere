import Layout from "../components/layout/layout";
import CardPrecios from "../components/precios/cardPrecios";
import Button from "react-bootstrap/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";

import cardStyle from "../components/precios/CardPrecios.module.scss";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import PreciosHero from "../components/precios/PreciosHero";

export default function precios() {
	return (
		<Layout>
			<PreciosHero />
			<div className="container mt-5">
				<h1 className="display-4 fw-normal text-center">Nuestros precios</h1>
				<div className="col-8 mx-auto text-center">
					<p className="lead">Nuestros precios se ajustan a tus necesidades</p>
				</div>

				<div className="row mt-5">
					<div className="col-lg-4 col-sm-12">
						<div className={`${cardStyle.container} ${cardStyle.v1}`}>
							<h3>Basic</h3>
							<div className={cardStyle.subtitle}>pequena descripcion</div>

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
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
