import React,{useState} from 'react';
import './NewExpense.css';
import FormInput from './FormInput';

const NewExpense = (props)=>{

    const [action,setAction] = useState("Add")
    function saveExpenseHandler(enteredExpenseData,action){
        props.onAddExpense(enteredExpenseData);
        setAction(action)
    }
    const addHandler = (newaction)=>{setAction(newaction)}
    return(
        <div className='expense-class'>
            {
                action==="Submit" ?
                <FormInput onSaveExpense={saveExpenseHandler} onAdd={addHandler} />:
                
                <div className='Add'>
                    <button onClick={()=>addHandler("Submit")}>Add</button>
                </div>
            }
        </div>
    )
}

export default NewExpense;
