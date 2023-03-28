import React,{useState}  from "react";
import './FormInput.css';

const FormInput = ()=>{
    const [userInput,setUserInput] = useState({
        enteredTitle:"",
        enteredDate:"",
        enteredAmount:"",
    })

    function submitHandler(e){
        e.preventDefault()
        console.log({...userInput,enteredDate:new Date(userInput.enteredDate)})
    }

    return(
    <>
    <form onSubmit={submitHandler}>
        <div className="newexpense-controls">
            <div className="newexpense-control">
                <label htmlFor="expense">Expense</label>
                <input type="text" id="expense" value={userInput.enteredTitle} onChange={(e)=>{setUserInput((prevstate)=>{return{...prevstate,enteredTitle:e.target.value}})}}/>
            </div>
            <div className="newexpense-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={(e)=>{setUserInput((prevstate)=>{return{...prevstate,enteredAmount:e.target.value}})}}/>
            </div>
            <div className="newexpense-control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={(e)=>{setUserInput((prevstate)=>{return {...prevstate,enteredDate:e.target.value}})}}/>
            </div>
        </div>
        <div className="submit">
            <button>Submit</button>
        </div>
        <div className="pop">
        <div>
           Title : {userInput.enteredTitle}
        </div>
        <div>
            Amount : {userInput.enteredAmount}
        </div>
        <div>
            Date : {userInput.enteredDate}
        </div>
    </div>
    </form>
    </>
    )
}

export default FormInput