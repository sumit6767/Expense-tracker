import React,{useState} from "react";
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props){
    const [selectedYear,setSelectedYear] = useState('2020');
    console.log(props.expenseData)
    const expenses = props.expenseData.filter((expense)=>expense.enteredDate.slice(0,4)===selectedYear)
    function selectionfilterHandler(year){
        setSelectedYear(year)
    }
    return(
        <>
      <ExpenseFilter selectedYear={selectedYear} selectionHandler={selectionfilterHandler}/>
      {
        expenses.length===0 ? <p className="no-item">NO items present</p> : 
        expenses.length===1 ? 
        <>
        <p className="no-item">Only one expense here.Please Add more...</p>
        {
        expenses.map((expense,nkey)=>{
          return <ExpenseItem key = {expense.id}  date = {new Date(expense.enteredDate)} expenseDetail = {expense.enteredTitle} amount = {expense.enteredAmount} />})
        }
        </>:
        expenses.map((expense,nkey)=>{
        return <ExpenseItem key = {expense.id}  date = {new Date(expense.enteredDate)} expenseDetail = {expense.enteredTitle} amount = {expense.enteredAmount} ></ExpenseItem>
      })
      }
      </>
    )
}

export default Expenses