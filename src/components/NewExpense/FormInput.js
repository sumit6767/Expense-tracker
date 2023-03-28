import React,{useState}  from "react";
import './FormInput.css';

function submitHandler(e){
}

function inputHandler(e){
    console.log(e.target.value)
}
const FormInput = ()=>{
    const [enteredTitle,setEnteredTitle] = useState("");
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    return(
    <form>
        <div className="newexpense-controls">
            <div className="newexpense-control">
                <label htmlFor="expense">Expense</label>
                <input type="text" id="expense" value={enteredTitle} onChange={(e)=>{setEnteredTitle(e.target.value)}}/>
            </div>
            <div className="newexpense-control">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" min="0.01" step="0.01" value={enteredAmount} onChange={(e)=>{setEnteredAmount(e.target.value)}}/>
            </div>
            <div className="newexpense-control">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={(e)=>{setEnteredDate(e.target.value)}}/>
            </div>
        </div>
        <div className="submit">
            <button onClick={submitHandler}>Submit</button>
        </div>
    </form>
    )
}

export default FormInput