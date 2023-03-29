import React from "react";

export default function ExpenseFilter(props){
    const selection = (e)=>{
        props.selectionHandler(e.target.value)
    }
    return(
        <>
            <label htmlFor="select">Select Year</label>
            <select name="" value = {props.selectedYear} onChange={selection} id="select">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </>
    )
}