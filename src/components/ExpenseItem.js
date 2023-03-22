import './expense.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

export default function ExpenseItem(props){
    return(
        <div className="expense_description">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} expenseDetail = {props.expenseDetail}></ExpenseDetails>
        </div>
    )
}