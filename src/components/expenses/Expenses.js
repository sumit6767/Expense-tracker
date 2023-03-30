import React,{useState} from "react";
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";

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
       
      expenses.map((expense,nkey)=>{
        return <ExpenseItem key = {expense.id}  date = {new Date(expense.enteredDate)} expenseDetail = {expense.enteredTitle} amount = {expense.enteredAmount} ></ExpenseItem>
      })
      }
      </>
    )
}

export default Expenses