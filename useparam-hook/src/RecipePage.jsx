import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipePage() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating fetching data from an API
        const fetchRecipe = async () => {
            setLoading(true);

            // Mock API response
            const mockRecipes = {
                1: { name: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], instructions: "Cook pasta, mix with eggs and cheese, add bacon." },
                2: { name: "Chicken Curry", ingredients: ["Chicken", "Curry Powder", "Coconut Milk"], instructions: "Cook chicken, add curry powder and coconut milk, simmer." },
                3: { name: "Pancakes", ingredients: ["Flour", "Eggs", "Milk", "Sugar"], instructions: "Mix ingredients, cook on skillet." }
            };

            // Simulate API delay
            setTimeout(() => {
                const recipeData = mockRecipes[recipeId];
                setRecipe(recipeData);
                setLoading(false);
            }, 1000);
        };

        fetchRecipe();
    }, [recipeId]);

    if (loading) {
        return <h2>Loading recipe...</h2>;
    }

    if (!recipe) {
        return <h2>Recipe not found</h2>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
}

export default RecipePage;