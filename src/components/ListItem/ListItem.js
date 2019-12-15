import React from 'react';
import './ListItem.css';

const ListItem = ({item}) => {

    const dataStyle = item.important ? 'red' : '#000' ;
    const  textDec = item.isDone ? 'line-through':'none';
    
    return (
    <li style={{color:dataStyle, textDecoration:textDec}}>
        {item.title}
            <button className="btn btn-danger ml-4 mb-1 mr-4 bg-light"> <i className="fa fa-remove"></i></button>
            <button className="btn btn-info bg-light"><i className="fa fa-check"></i></button>
            <textarea></textarea>
        </li>
    
    );
    
    };
    
    
    export default ListItem;