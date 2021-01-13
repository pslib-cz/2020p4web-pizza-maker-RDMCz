import './App.css';
import Title from "./components/Title";
import OrderPizza from "./components/OrderPizza";
import OrderCalzone from "./components/OrderCalzone";
import Ingredients from "./components/Ingredients";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Container } from "reactstrap";
import { useState } from 'react';
import { IngredientsProvider } from './providers/IngredientsProvider';

const history = createBrowserHistory();

function App() {
    return (
        <>
            <IngredientsProvider>
                <Router history={history}>
                    <Navigation></Navigation>
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Title}></Route>
                            <Route path="/order/pizza" component={OrderPizza}></Route>
                            <Route path="/order/calzone" component={OrderCalzone}></Route>
                            <Route path="/ingredients" component={Ingredients}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </Container>
                </Router>
            </IngredientsProvider>
        </>
    );
}

export default App;
