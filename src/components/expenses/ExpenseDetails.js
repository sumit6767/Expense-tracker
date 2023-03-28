import './expense.css';
import React,{useState} from 'react';
//named import and default import

function ExpenseDetails(props){
    let [title,setTitle] = useState(props.expenseDetail);

    const[amount,setAmount] = useState(+props.amount)
    function deleteHandler(e){
        e.target.parentElement.parentElement.parentElement.remove();
    }

    function updateHandler(e){
        setTitle("updated");
        console.log(title);
    }

    function amountHandler(){
        setAmount(+amount+100);
    }
    return(<div className="expense">
    <h2>{title}</h2>
    <span className="amount">{amount}</span>
    <span className="amount">{props.LocationOfExpenditure}</span>
    <span><button className='btn' onClick={deleteHandler}>Delete Expense</button></span>
    <span><button className='btn' onClick={updateHandler}>Update Expense</button></span>
    <span><button className='btn' onClick={amountHandler}>Add Expense Amount</button></span>
    </div>)
}

export default ExpenseDetails;
