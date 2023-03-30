import './App.css';
import React,{ useState} from 'react';
import NewExpense from './components/New Expense/NewExpense';
import Expenses from './components/expenses/Expenses';

function App(props){
  const [expenses,setExpense] = useState([]);
  const addExpenseHandler  = (expenseData)=>{
    setExpense((prevState)=>{
      prevState.unshift(expenseData)
      return [...prevState]
    })
  }

  return(
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <h1 style={{textAlign:"center"}}>Expense Details</h1>
      <div style={{backgroundColor:'rgba(0, 0, 0, 0.36)',borderRadius:'1rem',width:'93%'}}>
      <Expenses expenseData = {expenses} />
      </div>
    </div>
  )
}

export default App;
