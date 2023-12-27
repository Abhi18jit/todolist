import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App = () => {

  const [items, setItems] = useState("");
  const [saveItems, setSavedItems] = useState([]);
  const [editItem, setEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const changesmade = (event) => {
    setItems(event.target.value);
  };

  const submit = () => {
    setSavedItems((preItems) => {
      return ([...preItems, items]);
    });
    setItems('');
  };

  const editItems=(id)=>{
    const todo_edit=saveItems.find((curEle,index)=>{
        return id===index;
      })
    
    setItems(todo_edit);
    setEditItem(id);
    setToggleButton(true);

  }

  const confirmEdit=()=>{
    
    setSavedItems(()=>{return saveItems.map((curEle,index)=>{
        if(index===editItem) return items;
        else return curEle;
        
      })});
    setItems("");
    setEditItem();
    setToggleButton(false);
    }

  const deleteAll=()=>{
    setSavedItems([]);
  }

  const deleteitems = (id) => {
    setSavedItems((preVal) => {
      return preVal.filter((val, index) => {
        return index !== id;
      });
    });
  }



  return (
    <>
      <div className="outer container-fluid min-vh-100 ">


        <div className="box container-fluid bg-body-secondary p-4 rounded-4" style={{minHeight:"75vh",width:"30vw"}}>


          <h1 className="text-success text-center">  ToDoList</h1>
          <br />
          <input class="form-control form-control-md" type="text"  placeholder="Enter Items" onChange={changesmade} value={items}></input>
          
          {toggleButton ?((<button type="button" className="btn btn-warning btn-sm my-2 mx-auto w-100" onClick={confirmEdit}>Confirm Edit</button>)): (
            <button type="button" className="btn btn-warning btn-sm my-2 mx-auto w-100" onClick={submit}>Add Items</button>
          )
          
          
          
          }
          
          <button type="button" className="btn btn-info text-dark-emphasis btn-sm  mx-auto w-100" onClick={deleteAll}>Clear All Items</button>
          <hr />
          {saveItems.map((itemVal, index) => {
            /* return <li>{itemVal} <button onClick={()=>{deleteitems(index)}}>delete</button></li>; */ //without using props
            return <ToDoList itemname={itemVal} key={index} id={index} onSelect={deleteitems} onEdit={editItems} />   //with using props
          })}
        </div>
      </div>
    </>
  );
}

export default App;