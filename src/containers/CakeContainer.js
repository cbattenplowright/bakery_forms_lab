import { useState } from "react";
import CakeList from "../components/CakeList.js";
import NewCake from "../components/NewCake.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	)

	const addNewCake = (newCake) => {
		console.log(newCake);

		const updatedCakesList = [...listOfCakes, newCake];
		setListOfCakes(updatedCakesList);
		
	}

  return (
    <>
		<NewCake addNewCake={addNewCake}/>
        <CakeList cakes={listOfCakes} />
    </>
  )
}

export default CakeContainer;