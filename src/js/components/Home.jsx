import React, {useState} from "react";
import './index.css'



//create your first component
const Home = () => {

	const [chores, setChores] = useState(["Vacuum", "Wash Dishes", "Dust", "Make Bed"])
	const [newChore, setNewChore] = useState("")
	const nextChore = () =>{
		setChores([newChore])
	} 
	const myArray = ["a", "b", "c"]
	const myNewArray = [...myArray, "d"]
	console.log(myNewArray)
	return (

		<div className="text-center">
	
			<input onChange={(e) => {
				const newTask = e.target.value
				setNewChore(newTask)
			}}/>
			<button onClick={() => nextChore()}>
				Add Chore
			</button>
			<ul>
				{/* <li>Take Out Trash</li> */}
				{chores.map(
					(item, i) => {
						return(
								<li key={i + "chore"}>{item}</li>
						)
					}
				)}
			</ul>

		</div>
	);
};

export default Home;