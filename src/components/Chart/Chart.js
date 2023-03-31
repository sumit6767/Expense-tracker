import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = props=>{
    const dataPointsValue = props.datapoints.map(datapoint=>+datapoint.value)
    const maxValue = Math.max(...dataPointsValue);
    return(
        <div className="chart">
            {
                props.datapoints.map(datapoint=>{
                    return <ChartBar key={datapoint.label} value={datapoint.value} maxValue={maxValue} label={datapoint.label}/>
                })
            }
        </div>
    )
}

export default Chart;