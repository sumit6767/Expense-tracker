import './expense.css'

export default function ExpenseItem(props){
    return(
        <div className="expense_description">
            <div>{props.date}</div>
            <div className="expense">
                <h2>{props.expenseDetail}</h2>
                <span className="amount">{props.amount}</span>
                <span className="amount">{props.LocationOfExpenditure}</span>
            </div>
        </div>
    )
}