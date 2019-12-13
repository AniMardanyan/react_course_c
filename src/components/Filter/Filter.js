import React from "react";

import "./Filter.css";
const Filter = () =>{
    return (
        <React.Fragment>
            <h3>Search.</h3>
            <input type = "text" className="mr-5"/>
            <button className = "btn btn-info bg-light">Search</button>
            <hr/>
            <button className="btn btn-info bg-light mr-5">Important</button>
            <button className="btn btn-primary bg-light">Active</button>
        </React.Fragment>
    );
};

export default Filter;