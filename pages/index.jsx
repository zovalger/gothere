import Head from "next/head";

// import Image from "next/image";

import CardService_Container from "../components/CardService_Container";
import MainHero from "../components/MainHero";
import TurismoGuarico from "../components/TurismoGuarico";
import ServiceGeneral from "../components/ServiceGeneral";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/layout/layout";

export default function Home() {
	return (
		<Layout>
			<MainHero urlImage={"/GoThere-black.svg"}/>

			<div className="container">
				<CardService_Container />
				<TurismoGuarico />
			</div>
			<ServiceGeneral />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<TitleAndDescription
							title={"Conócenos mejor"}
							description={[
								`El 30 de Noviembre del año 2022 los estudiantes del área de ingeniería en informática Javier Moreno, César Meza, Abraham González, Germán Castro y Jhon Ramírez iniciaron la creación de la empresa que tiene como nombre GoThere, está empresa se creó al ver que la principal problemática en el estado Guárico era la forma ineficiente en que se publicitan los sitios turísticos a los cuales se le puede considerar que tienen un potencial de explotación económico para el beneficio y desarrollo del estado Guárico, esta problemática los motivó a crear GoThere la cual tiene la meta de unir de forma estratégica todos esos lugares apasionantes que tiene este estado de llanuras.`,
							]}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12">
						<TitleAndDescription
							title={"Misión"}
							description={[
								`Brindar un servicio turístico y de publicidad, eficiente y de calidad, guiando a los clientes de la mejor manera posible por los diversos sitios turísticos del estado, y proporcionando el mejor apoyo a las empresas que nos contraten.									`,
							]}
						/>
					</div>
					<div className="col-md-6 col-sm-12">
						<TitleAndDescription
							title={"Visión"}
							description={[
								`Ser una empresa que presente de la mejor manera el estado Guárico, sus sitios naturales y la promoción de eventos de interés para los turistas que lo visiten, de una manera agradable y eficiente.`,
							]}
						/>
					</div>

					<div className=" col-sm-12">
						<TitleAndDescription
							title={"Objetivos"}
							description={[
								`Nuestro objetivo es atraer a los turistas presentando paquetes de viaje completos en nuestra plataforma, ofreciendo los servicios de nuestros aliados.`,
								`Además ofrecerle a las pequeñas empresas un modo de poder promocionar sus eventos incluyéndose dentro de nuestra planificación de viajes y publicitarlas en nuestra plataforma, e incluso apoyándolos en sus operaciones con datos sobre los turistas.`,
							]}
						/>
					</div>
				</div>

				<div className="row">
					<h2>Valores</h2>
				</div>

				<div className="row">
					<div className="col-md-6 col-sm-12">
						<ul>
							<li>
								<strong>Responsabilidad</strong>: Nos haremos responsables de
								mantener un ambiente de humildad y respeto.
							</li>

							<li>
								<strong>Puntualidad</strong>: Será lo más puntual posible para
								no tener retrasos con las horas planificadas.
							</li>

							<li>
								<strong>Atención</strong>: Nos mantendremos atentos con la
								atención al cliente para cualquier duda que se tenga sobre la
								empresa y de cómo trabajamos.{" "}
							</li>

							<li>
								<strong>Comodidad</strong>: Haremos lo posible para mantener
								cómodos a todas las personas durante los viajes con las
								diferentes empresas.{" "}
							</li>
						</ul>
					</div>
					<div className="col-md-6 col-sm-12">
						<ul>
							<li>
								<strong>Honestidad</strong>: Se tratará a las personas con la
								mayor honestidad posible, amabilidad,y con una buena atención.{" "}
							</li>
							<li>
								<strong>Limpieza</strong>: Se mantendrá la mayor pulcritud
								posible, para mantener una buena limpieza.{" "}
							</li>

							<li>
								<strong>Confianza</strong>: Mantendremos una comunicación
								constante con las diferentes personas que nos contraten, para
								así tener un ambiente de confianza. Presentación: Se presentará
								la empresa de distintas maneras para lograr tener la atención de
								las personas.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
}
