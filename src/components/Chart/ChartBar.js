import React from "react";
import './ChartBar.css'
const ChartBar =  props=>{
    let barfillheight = '0%';
    if(props.maxValue > 0){
        barfillheight = Math.round((props.value/props.maxValue)*100)+"%"
    }
    console.log(props.maxValue)
    return(
        <div className="chart-bar">
            <div className="chart-bar_inner">
                <div className="chart-bar_fill" style={{height:barfillheight}}>

                </div>
            </div>
                <div className="chart-bar_label">
                    {props.label}
                </div>
        </div>
    )
}

export default ChartBar