import React, { useState } from "react";

const semaforo = () => {
	const [encendido, setEncendido] = useState();
	return (
		<div className="container">
			<div className="palito"></div>
			<div className="semaforo">
				<div
					className={"rojo" + on == "rojo" ? "prendido" : ""} //aca poner operador ternario:
					onClick={() => {
						setEncendido("rojo");
					}}></div>
				<div
					className="amarillo"
					onClick={() => {
						setEncendido("amarillo");
					}}></div>
				<div
					className="verde"
					onClick={() => {
						setEncendido("verde");
					}}></div>
			</div>
		</div>
	);
};

export default semaforo;
