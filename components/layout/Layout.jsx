import Head from "next/head";
import Footer from "./Footer";

import NavBar from "./NavBar";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/GoThere_20221130.svg" />
				<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
				{/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> */}
				
				<title>GoThere</title>
			</Head>

			<NavBar />

			<main className=" pb-3 pt-5 mt-3 bg-light">{children}</main>


			<Footer />
		</>
	);
}
