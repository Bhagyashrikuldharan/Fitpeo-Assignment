import React from "react";
import ReactStars from "react-rating-stars-component"
import { CustomerReviews } from "./utility.js"
import "./Reviews.css";

const Reviews = () => {
 
    return(
        <div className="feedback-container">
            <div className="feedback">
            <h1 id="feedback-heading">Customer's Feedback</h1>
            {CustomerReviews?.map((customer)=> (
            <div className="feedback-content">
                <h1 className="item-1"><img src={customer.profile} />{customer?.name}</h1>
                <div><ReactStars count={5} value={customer?.rating}/></div>
                <p className="item-2">{customer?.feedback}</p>
            </div>
            ))}

            </div>
        </div>
    )
};
export default Reviews;