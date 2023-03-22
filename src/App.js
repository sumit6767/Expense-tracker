import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client'
import ExpenseItem from './components/ExpenseItem'

function App(props){
  return(
    <div>
      <ExpenseItem expense="Food" amount ="10"></ExpenseItem>
      <ExpenseItem expense="Petrol" amount="100"></ExpenseItem>
      <ExpenseItem expense="Movies" amount="200"></ExpenseItem>
    </div>
  )
}
export default App;
