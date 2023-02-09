import Layout from "../components/layout/Layout";
import Button from "react-bootstrap/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";

import cardStyle from "../components/precios/CardPrecios.module.scss";
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

							<div className={cardStyle.subtitle}>Hasta un acompañante </div>
							<div className={cardStyle.amount}>
								99.<span>99</span>$
							</div>
							<Button>comprar</Button>

							<div className={cardStyle.details}>
								<ul>
									<li>
										<AiOutlineCheckCircle /> 2 Noches
									</li>
									<li>
										<AiOutlineCheckCircle /> Viaje a 4 sitios turísticos
									</li>
									<li>
										<AiOutlineCheckCircle /> Comida
									</li>
									<li>
										<AiOutlineCheckCircle /> Hospedaje
									</li>
									<li>
										<AiOutlineCheckCircle /> Transporte
									</li>
								</ul>
							</div>

							<div className={cardStyle.subtitle}>
								Usted y cualquier acompañante, será integrado en grupos donde
								será acompañado por los guias de Gothere hacia su destino.
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-12">
						<div className={`${cardStyle.container} ${cardStyle.v3}`}>
							<h3>Enterprise </h3>
							<div className={cardStyle.subtitle}>Hasta un acompañante</div>

							<div className={cardStyle.amount}>
								299.<span>99</span>$
							</div>

							<Button>comprar</Button>

							<div className={cardStyle.details}>
								<ul>
									<li>
										<AiOutlineCheckCircle /> 8 Noches
									</li>
									<li>
										<AiOutlineCheckCircle /> Viaje a 12 sitios turísticos
									</li>
									<li>
										<AiOutlineCheckCircle /> Comida
									</li>
									<li>
										<AiOutlineCheckCircle /> Opción a Comida Local
									</li>
									<li>
										<AiOutlineCheckCircle /> Hospedaje deluxe
									</li>
									<li>
										<AiOutlineCheckCircle /> Transporte privado
									</li>
									<li>
										<AiOutlineCheckCircle /> Eventos
									</li>
									<li>
										<AiOutlineCheckCircle /> Recuerdos
									</li>
								</ul>
							</div>
							<div className={cardStyle.subtitle}>
								Usted y cualquier acompañante, será integrado en grupos donde
								será acompañado por los guias de Gothere hacia su destino.
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12">
						<div className={`${cardStyle.container} ${cardStyle.v2}`}>
							<h3>Premium</h3>
							<div className={cardStyle.subtitle}>Hasta dos acompañantes</div>

							{/* <hr /> */}

							<div className={cardStyle.amount}>
								199.<span>99</span>$
							</div>
							<Button>comprar</Button>

							<div className={cardStyle.details}>
								<ul>
									<li>
										<AiOutlineCheckCircle /> 4 Noches
									</li>
									<li>
										<AiOutlineCheckCircle /> Viaje a 8 sitios turísticos
									</li>
									<li>
										<AiOutlineCheckCircle /> Comida
									</li>
									<li>
										<AiOutlineCheckCircle /> Opción a Comida Local
									</li>
									<li>
										<AiOutlineCheckCircle /> Hospedaje deluxe
									</li>
									<li>
										<AiOutlineCheckCircle /> Transporte
									</li>
									<li>
										<AiOutlineCheckCircle /> Eventos
									</li>
								</ul>
							</div>
							<div className={cardStyle.subtitle}>
								Usted y cualquier acompañante, será integrado en grupos donde
								será acompañado por los guias de Gothere hacia su destino.
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
