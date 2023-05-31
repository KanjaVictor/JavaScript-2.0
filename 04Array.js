import React from 'react';
import ReactDOM from 'react-dom/client';


const arr = ['A', 1, 'B', 2];

const myList = arr.map((item) => <p>{item}</p>)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myList);