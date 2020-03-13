import React from 'react';

interface BoardProps{
    name:string;
    color:string;
}


const Board = (props: BoardProps) => {
    return(
        <>
        <div>Hello I am {props.name} of color {props.color}</div>
        </>
    )
}

export default Board;