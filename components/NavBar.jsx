import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";

export default function NavBar() {
	return (
		<nav className="navbar bg-primary">
			<div className="container-fluid text-white">
				<Link className="navbar-brand d-flex align-items-center" href="#">
					<Image
						src="/GoThere-white.png"
						alt="logo gothere"
						width={70}
						height={10}
						className={styles.Nav_logo}
					/>

					<span className=" text-white">GoThere</span>
				</Link>

				{/* <Link href={`#`} className="nav-item">
					Nosotros
				</Link> */}
			</div>
		</nav>
	);
}
