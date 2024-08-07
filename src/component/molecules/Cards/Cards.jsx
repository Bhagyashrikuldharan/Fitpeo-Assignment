import React from "react";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import "./Cards.css"

const Cards = () => {
    return(
        <div>
            <div className="cards-container">
                <div className="card-item1">
                    <div id="icon1">
                        <AssessmentOutlinedIcon />
                    </div>
                    <h2 >Total Orders</h2>
                    <div className="item">
                        <h1>75</h1>
                        <p id="value1"><ArrowDropUpIcon/>3%</p>
                    </div>
                </div>
                <div className="card-item1">
                    <div id="icon2">
                        <AssessmentOutlinedIcon />
                    </div>
                    <h2 >Total Delivered</h2>
                    <div className="item">
                        <h1>70</h1>
                        <p id="value2"><ArrowDropUpIcon/>3%</p>
                    </div>
                </div>
                <div className="card-item1">
                    <div id="icon3">
                        <AssessmentOutlinedIcon />
                    </div>
                    <h2 >Total Cancelled</h2>
                    <div className="item">
                        <h1>20</h1>
                        <p id="value3"><ArrowDropUpIcon/>3%</p>
                    </div>
                </div>
                <div className="card-item1">
                    <div id="icon4">
                        <AssessmentOutlinedIcon />
                    </div>
                    <h2 >Total Revenue</h2>
                    <div className="item">
                        <h1>$12K</h1>
                        <p id="value4"><ArrowDropUpIcon/>3%</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards;