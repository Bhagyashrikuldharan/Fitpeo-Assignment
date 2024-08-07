import React from "react";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ProgressBar from "../../atoms/ProgressBar/ProgressBar"
import "./AchivedGoals.css";

const AchivedGoals = () => {
    return(
        <div className="achived-goals">
            <div>
            <h2 id="net-profit">Net Profit</h2>
            <h1>$6759.25</h1>
            <p id="value1"><ArrowDropUpIcon/>3%</p>
            </div>
            <div className="progress">
            <ProgressBar/>
            <h2>The values has been here rounded off</h2>

            </div>
            
        </div>
    )
}
export default AchivedGoals;