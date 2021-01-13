import { useContext } from "react";
import { IngredientsContext } from "../providers/IngredientsProvider";

const IngredientsPicker = () => {

    const [state] = useContext(IngredientsContext);

    return (
        <>
            <br></br>
            <p>Maximální počet ingrediencí - {state.maxIngredients}</p>
        </>
    )
}

export default IngredientsPicker;