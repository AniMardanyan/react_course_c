import React from "react";
import ListItem from  '../ListItem/ListItem';
import './List.css';

const List = ({listData}) => {

   const listItemData = listData.map((d) =>{
       return <ListItem item={d} key={d.id}/>
   })
    return (
    <div>
        <h3>Lists</h3>
        <ul>
            {listItemData}
            </ul>
            </div>
    
    );
    
    };

    export default List;