import './expense.css';
import React,{useState} from 'react';
//named import and default import

function ExpenseDetails(props){

    function deleteHandler(e){
        const newExpense = []
        for(const expense of props.expenses){
            if(expense.id===props.id){
                continue;
            }
            else{
                newExpense.push(expense)
            }
        }     
        props.onUpdate(newExpense)
    }

    function updateHandler(e){
        const newExpense = []
        for(const expense of props.expenses){
            if(expense.id===props.id){
                expense.enteredTitle = (window.prompt("Enter your expense"))
                newExpense.push(expense)
            }
            else{
                newExpense.push(expense)
            }
        }     
        props.onUpdate(newExpense)
    }


    function amountHandler(e){
        const newExpense = []
        console.log(props.expenses)
        for(const expense of props.expenses){
            if(expense.id===props.id){
                expense.enteredAmount = +(window.prompt("Enter you new amount"));
                newExpense.push(expense)
            }
            else{
                newExpense.push(expense)
            }
        }     
        props.onUpdate(newExpense)
    }
    return(<div className="expense">
    <h2>{props.expenseDetail}</h2>
    <span className="amount">{props.amount}</span>
    <span className="amount">{props.LocationOfExpenditure}</span>
    <span><button className='btn' onClick={deleteHandler}>Delete Expense</button></span>
    <span><button className='btn' onClick={updateHandler} >Update Expense</button></span>
    <span><button className='btn' onClick={amountHandler}>Add Expense Amount</button></span>
    </div>)
}

export default ExpenseDetails;
