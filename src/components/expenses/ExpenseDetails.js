import './expense.css';

function ExpenseDetails(props){

    return(<div className="expense">
    <h2>{props.expenseDetail}</h2>
    <span className="amount">{props.amount}</span>
    <span className="amount">{props.LocationOfExpenditure}</span>
</div>)
}

export default ExpenseDetails;
