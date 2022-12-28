import styles from "./ServiceGeneralItem.module.scss";



export default function ServiceGeneralItem({ Icon, text }) {
	return (
		<div className={`${styles.container}`}>
			<Icon className={styles.icon} />

			<span className="">{text}</span>
		</div>
	);
}
