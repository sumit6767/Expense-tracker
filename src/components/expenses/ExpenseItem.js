import './expense.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import React,{useState} from 'react'

export default function ExpenseItem(props){

    const [selectedYear,setSelectedYear] = useState('2020')
    function selectionfilterHandler(year){
        console.log(year)
        setSelectedYear(year)
    }
    return(
        <Card className="expense_description" id={props.id}>
            <ExpenseFilter selectedYear={selectedYear} selectionHandler={selectionfilterHandler}/>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} expenseDetail = {props.expenseDetail}></ExpenseDetails>
        </Card>
    )
}