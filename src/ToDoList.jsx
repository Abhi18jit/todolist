import React from "react";

const ToDoList = (props) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                <li className="list-group-item my-1 rounded bg-body-tertiary text-capitalize">
                    {props.itemname}
                    <button type="button" className="bg-body-tertiary display close border-0" aria-label="Close" onClick={()=>{props.onEdit(props.id)}}>
                    <span className="mx-1" >✏️</span>
                    
                    </button>
                    <button type="button" className="bg-body-tertiary  display close border-0" aria-label="Close" onClick={() => {
                        props.onSelect(props.id);
                    }}>
                    <span aria-hidden="true">&times;</span>
                    
                    </button>
                    
                </li>
                
            </ul>
        </>
    )
}

export default ToDoList;