
import React, { useEffect,useState } from "react";



//create your first component
const Home = () => {
	const [inputValue, setInputvalue] = useState("");
	const [todos, setTodos] = useState([]);
	const [estado, setEstado] = useState("");
	const [hidden, setHidden] = useState(true);

	useEffect( ()=>{
		if (todos.length === 0) {
			setEstado(prev => "Lista vacia, agrega una tarea");
		}
		else{
			setEstado(prev => "Tarea");
		}
	}
	), [todos]

	return (
		<div className="container">
			<h1>Lista de actividades por hacer</h1>
			<ul>
				<li>
					<input type="text"
					onChange={(e) => setInputvalue(e.target.value)}
						value={inputValue}
								onKeyDown={(e) => {
									
									if ((inputValue != "")){
										if (e.key == "Enter"){
											setTodos(todos.concat([inputValue]));
											setInputvalue("");
										}
									}
								}
								
						}
					placeholder="Que necesitas hacer?"/>
				</li>

						{todos.map((item, index) =>(
							<li key={index} onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
								{item}  
								{hidden ? null : 
									<i className="fas fa-trash-alt" 
								 		onClick={() =>
											setTodos(
												todos.filter(
													(t, currentIndex) => index != currentIndex 
												)
											)
										}
									
									>
									</i>
								}
							</li>
						))}
					

			</ul>
			<div>{todos.length}   {estado}</div>
			
		</div>
	);
};

export default Home;
