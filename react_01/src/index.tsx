import React from 'react';
import ReactDom from 'react-dom';
import Home from './home';


//* Passing a prop
ReactDom.render(<Home user="Steve" />, document.querySelector("#root"));

