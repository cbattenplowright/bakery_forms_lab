import { useState } from "react";

const NewCake = ({ addNewCake }) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCake = {
            cakeName: cakeName,
            ingredients: ingredients,
            price: price,
            rating: rating
        }

        console.log(newCake);
    }

    return (
        <>
            <h2>Add new cake</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="cakeName"
                    placeholder="Cake Name"
                    value={cakeName}
                    onChange={(e) => setCakeName(e.target.value)}
                />
                <input
                    type="text"
                    name="ingredients"
                    placeholder="Ingredients separate with commas"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    name="Rating"
                    placeholder="Rating (0-5)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <input
                    type="submit"
                    value="Add New Cake"
                />
            </form>
        </>
    );
}

export default NewCake;