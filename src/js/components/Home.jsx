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
		<div className="parentDiv container card text-center">
			<h1 className="toDoHeader">To-Do List:</h1>

			<input
			value={newChore}
			placeholder="What Do I Need To Do?"
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

			<div className="listBody row justify-content-end">

				<div className="listOfChores col">	
					<ul 
					className="ulRoot">
						{chores.map(
						(item, i) => {
						return(
							<div className="d-flex">
								<li className="" key={i + "chore"}>{item}</li>
								<span className="deleteChore"
								onClick = {() => {
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

				<div className="choreButton col-4">
					<button onClick={() => nextChore()}>
						Add Chore
					</button>
				</div>
			</div>		
		</div>

		
	);
};

export default Home;


