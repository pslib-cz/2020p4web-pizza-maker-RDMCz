import { useContext, useState } from "react";
import {Table, Input, Button} from "reactstrap";
import { ADD_INGREDIENT, IngredientsContext } from "../providers/IngredientsProvider";

const Ingredients = () => {

    const [state, dispatch] = useContext(IngredientsContext);

    const [nameInput, setNameInput] = useState("");
    const [categoryInput, setCategoryInput] = useState("");

    return (
        <>
            <br></br>
            <h3>Ingredience - {state.ingredients.length}</h3>

            <Table>
                <thead>
                    <tr>
                        <th>Název</th>
                        <th>Kategorie</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.ingredients.map(
                            (item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </Table>

            <h5>Přidat</h5>
            <Input
                placeholder="Název"
                value={nameInput}
                onChange={e=>{setNameInput(e.target.value)}}
            ></Input>
            <Input
                placeholder="Kategorie"
                value={categoryInput}
                onChange={e=>{setCategoryInput(e.target.value)}}
            ></Input>
            <Button onClick={() => {
                dispatch({
                    type: ADD_INGREDIENT,
                    name: nameInput,
                    category: categoryInput,
                });
                setNameInput("");
                setCategoryInput("");
            }}>Přidat</Button>
            
        </>
    )
}

export default Ingredients;