import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import ExpenseItem from './components/expenses/ExpenseItem'
import React,{useRef,useEffect, useState} from 'react'

function App(props){
  const ref = useRef(null); 
  const expenses = [{date  : new Date(), expenseDetail : "food" ,amount : "10" ,LocationOfExpenditure : "kalyan"},
  {date  : new Date(), expenseDetail : "Petrol" ,amount : "100" ,LocationOfExpenditure : "Kurla"},
  {date  : new Date(), expenseDetail : "Movies" ,amount : "200" ,LocationOfExpenditure : "Thane"}]

  const [value,setValue] = useState("sumit ..");

  return(
    <div>
      <h1>Expense Details</h1>
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
