import React, { useState } from "react";

const semaforo = () => {
	const [encendido, setEncendido] = useState(null);
	// const encenderApagar = () => {
	// setEncendido(!encendido);
	// };
	// console.log(encendido);
	// let brillito = "";
	// if ((encendido = "rojo")) brillito = "brillo";
	const [rojoEncendido, setrojoEncendido] = useState(false);
	const [amarilloEncendido, setamarilloEncendido] = useState(false);
	const [verdeEncendido, setverdeEncendido] = useState(false);

	const encenderVerde = () => {
		setverdeEncendido(true);
		setamarilloEncendido(false);
		setrojoEncendido(false);
	};
	const encenderRojo = () => {
		setverdeEncendido(false);
		setamarilloEncendido(false);
		setrojoEncendido(true);
	};
	const encenderAmarillo = () => {
		setverdeEncendido(false);
		setamarilloEncendido(true);
		setrojoEncendido(false);
	};

	return (
		<div className="container">
			<div className="palito"></div>
			<div className="semaforo">
				<div
					className={rojoEncendido ? "luz rojo brillo" : "luz rojo"}
					onClick={encenderRojo}></div>
				<div
					className={
						amarilloEncendido
							? "luz amarillo brillo"
							: "luz amarillo"
					}
					onClick={encenderAmarillo}></div>
				<div
					className={
						verdeEncendido ? "luz verde brillo" : "luz verde"
					}
					onClick={encenderVerde}></div>
			</div>
		</div>
	);
};

export default semaforo;
