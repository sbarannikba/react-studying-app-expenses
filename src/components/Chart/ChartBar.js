import React from "react";

import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHight = '0%';

    if(props.maxValue > 0) {
        console.log(props.value);
        barFillHight = Math.round((props.value / props.maxValue) * 100).toString() + '%';
    }

    console.log("totalMaximum",barFillHight);
    return (<div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height: barFillHight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>);
}

export default ChartBar;
