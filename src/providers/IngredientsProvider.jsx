import { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";

const initialState = {
    ingredients: [
            {name: "Šunka", category: "Maso"},
            {name: "Slanina", category: "Maso"},
            {name: "Grilované kuřecí", category: "Maso"},
            {name: "Carpaccio", category: "Maso"},
            {name: "Špenát", category: "Zelenina"},
            {name: "Olivy", category: "Zelenina"},
            {name: "Kukuřice", category: "Zelenina"},
            {name: "Beraní rohy", category: "Zelenina"},
            {name: "Mozzarella", category: "Sýr"},
            {name: "Fontina", category: "Sýr"},
            {name: "Gorgonzola", category: "Sýr"},
            {name: "Parmezán", category: "Sýr"},
    ],
    maxIngredients : 4,
}

export const IngredientsContext = createContext(initialState);

const ingredientsReducer = (state, action) => {
    switch(action.type) {
        case ADD_INGREDIENT: {
            let temp = copyMultidimensionalArray(state);
            if (action.name !== "" && action.category !== "") {
                temp.ingredients.push({name: action.name, category: action.category});
            }
            return temp;
        }
        default: return state;
    }
}

export const IngredientsProvider = ({children, ...rest}) => {
    const [state, dispatch] = useReducer(ingredientsReducer, initialState);
    return (
        <>
            <IngredientsContext.Provider value={[state, dispatch]}>
                {children}
            </IngredientsContext.Provider>
        </>
    )
}

const copyMultidimensionalArray = (arr) => {
    return JSON.parse(JSON.stringify(arr));
};