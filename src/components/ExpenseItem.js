import './expense.css'

export default function ExpenseItem(props){
    const date = new Date().toDateString()
    const expenseDetail = "food";
    const amount = "10"
    return(
        <div className="expense_description">
            <div>{date}</div>
            <div className="expense">
                <h2>{expenseDetail}</h2>
                <span className="amount">{amount}</span>
            </div>
        </div>
    )
}