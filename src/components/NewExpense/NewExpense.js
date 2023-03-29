import React from 'react';
import './NewExpense.css';
import FormInput from './FormInput';

const NewExpense = (props)=>{

    function saveExpenseHandler(enteredExpenseData){
        props.onAddExpense(enteredExpenseData);
    }

    return(
        <div className='expense-class'>
            <FormInput onSaveExpense={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense;