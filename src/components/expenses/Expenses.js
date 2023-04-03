import React,{useState} from "react";
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpenseChart from "./ExpenseChart";

function Expenses(props){
    const [selectedYear,setSelectedYear] = useState('2020');
    const expenses = props.expenseData.filter((expense)=>expense.enteredDate.slice(0,4)===selectedYear)
    function selectionfilterHandler(year){
        setSelectedYear(year)
    }
    return(
        <>
      <ExpenseFilter selectedYear={selectedYear} selectionHandler={selectionfilterHandler}/>
      <ExpenseChart expenses = {expenses}/>
      {
        expenses.length===0 ? <p className="no-item">NO items present</p> : 
        expenses.length===1 ? 
        <>
        <p className="no-item">Only one expense here.Please Add more...</p>
        {
        expenses.map((expense,nkey)=>{
          return <ExpenseItem onUpdate={props.onUpdate} expenses = {props.expenseData} id={expense.id} key = {expense.id}  date = {new Date(expense.enteredDate)} expenseDetail = {expense.enteredTitle} amount = {expense.enteredAmount} />})
        }
        </>:
        expenses.map((expense,nkey)=>{
        return <ExpenseItem onUpdate={props.onUpdate} expenses={props.expenseData} key = {expense.id} id={expense.id} date = {new Date(expense.enteredDate)} expenseDetail = {expense.enteredTitle} amount = {expense.enteredAmount} ></ExpenseItem>
      })
      }
      </>
    )
}

export default Expenses