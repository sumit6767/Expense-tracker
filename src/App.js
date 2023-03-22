import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import ExpenseItem from './components/ExpenseItem'

function App(props){

  const expenses = [{date  : new Date(), expenseDetail : "food" ,amount : "10" ,LocationOfExpenditure : "kalyan"},
  {date  : new Date(), expenseDetail : "Petrol" ,amount : "100" ,LocationOfExpenditure : "Kurla"},
  {date  : new Date(), expenseDetail : "Movies" ,amount : "200" ,LocationOfExpenditure : "Thane"}]
  return(
    <div>
      <h1>Expense Details</h1>
      {
      expenses.map(expense=>{
        return <ExpenseItem date = {expense.date} expenseDetail = {expense.expenseDetail} amount = {expense.amount} LocationOfExpenditure = {expense.LocationOfExpenditure}></ExpenseItem>
      })
      }
    </div>
  )
}
export default App;
