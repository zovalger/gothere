import Comment from "./Comment";
import styles from "./Comments.module.scss";

export default function Comments() {
	return (
		<div className={styles.container}>
			<div className="container py-5">
				<h2 className="text-center">Algunos de nuestros clientes</h2>

				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<Comment
							nombre={"Sara Gomez"}
							img={"/person_1.jpg"}
							comentario={
								"“Si no hubiera visto las publicaciones de GoThere, nunca me hubiera imaginado conocer los las llanuras de Venezuela”"
							}
							starts={5}
						/>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-12">
						<Comment
							nombre={"Álvaro Sheinbaum"}
							img={"/person_3.jpg"}
							comentario={
								"“Aunque los precios no son los mejores del mercado la forma en que organizan todo por ti vale la pena”"
							}
							starts={3}
						/>
					</div>

					<div className="col-lg-4 col-md-4 col-sm-12">
						<Comment
							nombre={"Helena Rivera"}
							img={"/person_2.jpg"}
							comentario={
								"“Nunca antes me habían atendido de esta manera tan considerada, sinceramente son los mejores en lo que hacen”"
							}
							starts={5}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
