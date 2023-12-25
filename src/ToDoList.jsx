import React from "react";

const ToDoList = (props) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item my-1 rounded bg-body-tertiary text-capitalize">
                    {props.itemname}
                    <button type="button" className="bg-body-tertiary mx-2 display close border-0" aria-label="Close" onClick={() => {
                        props.onSelect(props.id);
                    }}><span aria-hidden="true">&times;</span></button>
                    
                </li>
                
            </ul>
        </>
    )
}

export default ToDoList;