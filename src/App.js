import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem'
import React,{useRef,useEffect, useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';

function App(props){
  const ref = useRef(null); 
  const expenses = [{date  : new Date(), expenseDetail : "food" ,amount : "10" ,LocationOfExpenditure : "kalyan"},
  {date  : new Date(), expenseDetail : "Petrol" ,amount : "100" ,LocationOfExpenditure : "Kurla"},
  {date  : new Date(), expenseDetail : "Movies" ,amount : "200" ,LocationOfExpenditure : "Thane"}]

  return(
    <div style={{backgroundColor:"lightblue"}}>
      <NewExpense />
      <h1 style={{textAlign:"center"}}>Expense Details</h1>
      {
      expenses.map((expense,nkey)=>{
        return <ExpenseItem key = {nkey} id={nkey} date = {expense.date} expenseDetail = {expense.expenseDetail} amount = {expense.amount} LocationOfExpenditure = {expense.LocationOfExpenditure}></ExpenseItem>
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
