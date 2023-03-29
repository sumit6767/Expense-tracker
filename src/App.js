import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem'
import React,{useRef,useEffect, useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';

function App(props){
  const ref = useRef(null); 
  const expenseData = []

  const [expenses,setExpense] = useState([...expenseData]);

  const addExpenseHandler  = (expenseData)=>{
    expenseData = {
      date : expenseData.enteredDate,
      expenseDetail : expenseData.enteredTitle,
      amount : expenseData.enteredAmount,
      id : expenseData.id
    }
    setExpense((prevState)=>{
      prevState.push(expenseData)
      return [...prevState]
    })
  }

  return(
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <h1 style={{textAlign:"center"}}>Expense Details</h1>
      {
      expenses.map((expense,nkey)=>{
        return <ExpenseItem key = {nkey} id={nkey} date = {new Date(expense.date)} expenseDetail = {expense.expenseDetail} amount = {expense.amount} ></ExpenseItem>
      })
      }
    </div>
  )
}



function Call(){
  return(
    <h1>Hi</h1>
  )
}
export default App;
