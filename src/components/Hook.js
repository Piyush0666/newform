import React,{useState} from "react";

const Hook = ()=>{
const[inputValue,setinputValue]= useState("Perdo");

let onChange =(event)=>{
    const newValue = event.target.value;
    setinputValue(newValue);
};
return(
    <div>
        <input placeholder="Enter Something..." onChange={onChange}></input>
        {inputValue}
    </div>
    );

};
export default Hook;