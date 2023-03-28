import React  from "react";
import './FormInput.css';

function submitHandler(e){
}

function inputHandler(e){
    console.log(e.target.value)
}
const FormInput = ()=>{
    return(
    <form>
        <div className="newexpense-controls">
            <div className="newexpense-control">
                <label for="expense">Expense</label>
                <input type="text" id="expense" onChange={inputHandler}/>
            </div>
            <div className="newexpense-control">
                <label for="amount">Amount</label>
                <input type="number" id="amount" min="0.01" step="0.01" onChange={inputHandler}/>
            </div>
            <div className="newexpense-control">
                <label for="date">Date</label>
                <input type="date" id="date" min="2019-01-01" max="2022-12-31" onChange={inputHandler}/>
            </div>
        </div>
        <div className="submit">
            <button onClick={submitHandler}>Submit</button>
        </div>
    </form>
    )
}

export default FormInput