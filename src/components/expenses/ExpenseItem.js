import './expense.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
import React,{} from 'react'

export default function ExpenseItem(props){
    return(
        <Card className="expense_description" id={props.id}>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails onUpdate={props.onUpdate} expenses = {props.expenses} id={props.id} amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} expenseDetail = {props.expenseDetail}></ExpenseDetails>
        </Card>
    )
}