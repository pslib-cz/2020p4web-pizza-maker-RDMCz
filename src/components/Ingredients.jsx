import { useContext, useState } from "react";
import { PizzaContext } from "../providers/PizzaContext";
import {Table, Input, Button} from "reactstrap";

const Ingredients = () => {

    const {context, setContext} = useContext(PizzaContext);

    const [text, setText] = useState("");
    const [categoryText, setCategorytext] = useState("");

    return (
        <>
            <br></br>
            <h3>Ingredience - {context.length}</h3>

            <Table>
                <thead>
                    <tr>
                        <th>Název</th>
                        <th>Kategorie</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.map(
                            (item, i) => (
                                <tr key={i}>
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
                value={text}
                onChange={e=>{setText(e.target.value)}}
            ></Input>
            <Input
                placeholder="Kategorie"
                value={categoryText}
                onChange={e=>{setCategorytext(e.target.value)}}
            ></Input>
            <Button onClick={() => {
                if (text !== "" && categoryText !== "") {
                    setContext([...context, {name: text, category: categoryText}])
                }
            }}>Přidat</Button>
        </>
    )
}

export default Ingredients;