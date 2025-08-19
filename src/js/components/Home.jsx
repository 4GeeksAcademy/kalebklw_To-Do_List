import React, {useState} from "react";
import './index.css'




const Home = () => {

	const [chores, setChores] = useState(["Vacuum", "Wash Dishes", "Dust", "Make Bed"])
	const [newChore, setNewChore] = useState("")
	const nextChore = () =>{
		setChores([...chores, newChore])
		setNewChore("")
	} 

	const deleteChore = (item) => {
		const filteredChores = chores.filter(
			(choreData) => choreData != item 
		)
		console.log("dust: ", filteredChores)	
		setChores(filteredChores)
	}

	return (
		<div className="text-center">
			<h1>To-Do List:</h1>

			<input
			value={newChore}
			onChange={(e) => {
				const newTask = e.target.value
				setNewChore(newTask)
					}
				}
			onKeyDown = {(e) => {
					if (e.key == "Enter"){
						nextChore(newChore)
						}
					}
				}
			/>

			<button onClick={() => nextChore()}>
				Add Chore
			</button>

			<ul>
				{chores.map(
					(item, i) => {
						return(
							<div>
								<li key={i + "chore"}>{item}</li>
								<span onClick = {() => {
									deleteChore(item)
										}
									}
								>X</span>
							</div>
						)
					}
				)}
			</ul>
			
		</div>
	);
};

export default Home;