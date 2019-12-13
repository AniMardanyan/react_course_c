import React from "react";
import ReactDOM from "react-dom";
import Filter from "./components/Filter/Filter";
import List from "./components/List/List";
import AddItem from "./components/AddItem/AddItem";

import "./index.css";

const App = () => {
    return (
        <div>
            <h1>ToDo List</h1>
            <Filter/>
            <List/>
            <AddItem/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);