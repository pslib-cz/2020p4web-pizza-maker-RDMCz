import { useContext } from "react";
import { PizzaContext } from "../providers/PizzaContext";

const OrderPizza = () => {

    const {context, setContext} = useContext(PizzaContext);

    return (
        <>
            <h3>Objednat Pizzu</h3>
        </>
    )
}

export default OrderPizza;