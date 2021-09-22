import React, { useState } from "react";

const semaforo = () => {
	const [encendido, setEncendido] = useState(false);
	const encenderApagar = () => {
		setEncendido(!encendido);
	};
	return (
		<div className="container">
			<div className="palito"></div>
			<div className="semaforo">
				<div className={"luz rojo" onClick={()encenderApagar}></div>
				<div
					className="luz amarillo"
					onClick={() => setEncendido(true)}></div>
				<div
					className="luz verde"
					onClick={() => setEncendido(true)}></div>
			</div>
		</div>
	);
};

export default semaforo;
