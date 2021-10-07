import React, { useState } from "react";

const semaforo = () => {
	const [encendido, setEncendido] = useState(null);
	// const encenderApagar = () => {
	// 	setEncendido(!encendido);
	// };
	console.log(encendido);
	let brillito = "";
	if ((encendido = "rojo")) brillito = "brillo";

	return (
		<div className="container">
			<div className="palito"></div>
			<div className="semaforo">
				<div
					className={"luz rojo" + brillito}
					onClick={() => setEncendido("rojo")}></div>
				<div
					className={"luz amarillo" + brillito}
					onClick={() => setEncendido("amarillo")}></div>
				<div
					className={"luz verde" + brillito}
					onClick={() => setEncendido("verde")}></div>
			</div>
		</div>
	);
};

export default semaforo;
