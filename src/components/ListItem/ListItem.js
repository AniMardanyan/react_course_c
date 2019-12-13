import React from "react";

const ListItem = () => {
    return (
        <li className="li">
            Hello test
            <button className="btn btn-danger ml-4 mb-1 mr-4 bg-light"> <i className="fa fa-remove"></i></button>
            <button className="btn btn-info bg-light"><i className="fa fa-check"></i></button>
        </li>
    );
};
export  default ListItem;