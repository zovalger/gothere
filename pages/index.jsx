import Image from "next/image";

import styles from "../styles/Home.module.scss";
import NavBar from "../components/NavBar";
import CardService_Container from "../components/CardService_Container";
import MainHero from "../components/MainHero";

export default function Home() {
	return (
		<>
			<NavBar />

			<main className=" pb-3">
				<MainHero />

				<div className="container">
					<CardService_Container />
				</div>
			</main>
		</>
	);
}
