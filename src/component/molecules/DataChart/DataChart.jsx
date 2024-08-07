import React from "react";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { BarChart } from '@mui/x-charts/BarChart';
import "./DataChart.css"

const DataChart = () => {
    return(
        <div className="chart-container">
            <div className="activity">
                <h1 id="header">Activity</h1>
                <button id="button">Weekly <ArrowDropDownRoundedIcon /></button>
            </div>
            <div className="chart">
                <BarChart
                    xAxis={[{
                        scaleType: 'band', data: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27], categoryGapRatio: 0.1,
                        barGapRatio: 0.2, fill: '#333' 
                    }]}
                    series={[{ data: [9, 3, 5, 8, 6, 9, 3, 10, 5, 8, 9] }, 
                    { data: [8, 6, 10, 5, 7, 8, 5, 4, 9, 6, 7] }, 
                    { data: [5, 10, 6, 8, 6, 10, 9, 6, 7, 4, 9] }]}

                />
            </div>

        </div>
    )
}
export default DataChart;

