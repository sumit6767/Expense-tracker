import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import ExpenseItem from './components/ExpenseItem'

function App(props){
  return(
    <div>
      <h1>Expense Details</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  )
}
export default App;
