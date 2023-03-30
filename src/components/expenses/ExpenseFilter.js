import React from "react";
import './ExpenseFilter.css';

export default function ExpenseFilter(props){
    const selection = (e)=>{
        props.selectionHandler(e.target.value)
    }
    return(
        <div className="filter">
            <label htmlFor="select">Select Year</label>
            <select name="" value = {props.selectedYear} onChange={selection} id="select">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}