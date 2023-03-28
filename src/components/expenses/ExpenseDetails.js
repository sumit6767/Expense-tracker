import './expense.css';

function ExpenseDetails(props){

    function deleteHandler(e){
        e.target.parentElement.parentElement.parentElement.remove();
    }

    return(<div className="expense">
    <h2>{props.expenseDetail}</h2>
    <span className="amount">{props.amount}</span>
    <span className="amount">{props.LocationOfExpenditure}</span>
    <span><button className='btn' onClick={deleteHandler}>Delete Expense</button></span>
    </div>)
}

export default ExpenseDetails;
