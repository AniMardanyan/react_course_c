import React from 'react';

import Filter from  '../Filter/Filter';
import List from  '../List/List';
import AddItem from  '../AddItem/AddItem';

import './App.css';

const dataArr = [
    {
        id: 1,
        title: 'Todo list 1',
        isDone: true,
        important: false
    },

    {
        id: 2,
        title: 'Todo list 2',
        isDone: false,
        important: true
    },

    {
        id: 3,
        title: 'Todo list 3',
        isDone: false,
        important: false
    },

    {
        id: 4,
        title: 'Todo list 4',
        isDone: true,
        important: true
    },
];

const App = () => {
    return (
    <div className='container'>
        <h1>Add Item</h1>
        < Filter/>
        <List listData={dataArr}/>
        <AddItem/>
        
            </div>
    
    );
    
    };

    export default App;