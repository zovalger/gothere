import Head from "next/head";

// import Image from "next/image";

import NavBar from "../components/NavBar";
import CardService_Container from "../components/CardService_Container";
import MainHero from "../components/MainHero";
import TurismoGuarico from "../components/TurismoGuarico";
import ServiceGeneral from "../components/ServiceGeneral";
import TitleAndDescription from "../components/TitleAndDescription";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<link rel="icon" href="/GoThere_20221130.svg" />
			</Head>
			<NavBar />

			<main className=" pb-3 bg-light">
				<MainHero />

				<div className="container">
					<CardService_Container />
					<TurismoGuarico />
				</div>
				<ServiceGeneral />
				<div className="container">
					<div className="row">
						<div className="col-12">
							<TitleAndDescription
								title={"conocenos mejor"}
								description={[
									`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Numquam quidem fuga voluptatibus nam aspernatur dolorem iure
								sit, pariatur hic. Dolorem iusto deserunt pariatur ut accusamus
								laborum minima dolorum laboriosam deleniti.`,
								]}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<TitleAndDescription
								title={"mision"}
								description={[
									`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Numquam quidem fuga voluptatibus nam aspernatur dolorem iure
								sit, pariatur hic. Dolorem iusto deserunt pariatur ut accusamus
								laborum minima dolorum laboriosam deleniti.`,
								]}
							/>
						</div>
						<div className="col-md-6 col-sm-12">
							<TitleAndDescription
								title={"vision"}
								description={[
									`Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Numquam quidem fuga voluptatibus nam aspernatur dolorem iure
								sit, pariatur hic. Dolorem iusto deserunt pariatur ut accusamus
								laborum minima dolorum laboriosam deleniti.`,
								]}
							/>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
