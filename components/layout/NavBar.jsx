import Image from "next/image";
// import Link from "next/link";
import styles from "./NavBar.module.scss";

// export default function NavBar() {
// 	return (
// 		<nav className="navbar bg-primary">
// 			<div className="container-fluid text-white">
// 				<Link className="navbar-brand d-flex align-items-center" href="#">
// 					<Image
// 						className={styles.logo}
// 						src="/GoThere-black.svg"
// 						alt="logo"
// 						width={200}
// 						height={200}
// 					/>

// 					<span className=" text-white">GoThere</span>
// 				</Link>

// 				{/* <Link href={`#`} className="nav-item">
// 					Nosotros
// 				</Link> */}
// 			</div>
// 		</nav>
// 	);
// }

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";

export default function NavBar() {
	return (
		<Navbar
			bg="primary"
			variant="dark"
			expand={"lg"}
			className={styles.container}
		>
			<Container fluid>
				<Navbar.Brand href="/">
					<Image
						className={styles.logo + " d-inline-block align-top"}
						src="/GoThere-black.svg"
						alt="logo"
						width={30}
						height={30}
					/>
					GoThere
				</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-${"lg"}`}
					aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
							GoThere
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Link href="/" className="nav-link">
								Inicio
							</Link>
							<Link href="/precios" className="nav-link">
								Precios
							</Link>

							{/* <Link href="/precios" className="nav-link">
								GoThere para empresas
							</Link> */}
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
