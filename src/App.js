import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App = () => {

  const [items, setItems] = useState("");
  const [saveItems, setSavedItems] = useState([]);

  const changesmade = (event) => {
    setItems(event.target.value);
  };

  const submit = () => {
    setSavedItems((preItems) => {
      return ([...preItems, items]);
    });
    setItems('');
  };

  const deleteitems = (id) => {
    setSavedItems((preVal) => {
      return preVal.filter((val, index) => {
        return index !== id;
      });
    });
    // console.log(id + "deleted");
  }



  return (
    <>
      <div className="outer container-fluid min-vh-100 ">


        <div className="box container-fluid bg-body-secondary p-4 rounded-4" style={{minHeight:"75vh",width:"30vw"}}>


          <h1 className="text-success text-center">  ToDoList</h1>
          <br />
          <input class="form-control form-control-md" type="text"  placeholder="Enter Items" onChange={changesmade} value={items}></input>
          <button type="button" className="btn btn-warning btn-sm my-2 mx-auto w-100" onClick={submit}>Add Items</button>
          <hr />
          {saveItems.map((itemVal, index) => {
            /* return <li>{itemVal} <button onClick={()=>{deleteitems(index)}}>delete</button></li>; */ //without using props
            return <ToDoList itemname={itemVal} key={index} id={index} onSelect={deleteitems} />   //with using props
          })}
        </div>
      </div>
    </>
  );
}

export default App;