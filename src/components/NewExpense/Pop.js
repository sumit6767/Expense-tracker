import React  from "react";
import './FormInput.css'
const Pop = (props)=>{
    return(
    <div className="pop">
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
           Title : <span>{props.userInput.enteredTitle}</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            Amount : <span>{props.userInput.enteredAmount}</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            Date : <span>{props.userInput.enteredDate}</span>
        </div>
    </div>
    )
}

export default Pop;