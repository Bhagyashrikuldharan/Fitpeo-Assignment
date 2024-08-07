import React from "react";
import "./OrderTable.css";
import Photo1 from "../../images/Photo1.jpg"
import Photo2 from "../../images/Photo2.jpg"
import Photo3 from "../../images/Photo3.jpg"
import Photo4 from "../../images/Photo4.jpg"
import Photo5 from "../../images/photo5.jpg"
import Photo6 from "../../images/photo.jpg"

const OrderTable = () => {

    const tableInfo = [
        {
            "name": "kelin hell",
            "orderNo":23463744,
            "amount": "$123.00",
            "status": "Delivered",
            "photo": Photo1
        },
        {
            "name": "warm buffet",
            "orderNo": 556382962,
            "amount": "$653.00",
            "status": "Delivered",
            "photo": Photo2
        },
        {
            "name": "Kriss Gell",
            "orderNo": 98673542,
            "amount": "$763.00",
            "status": "Cancelled",
            "photo": Photo3
        },
        {
            "name": "Narien kim",
            "orderNo": 534674882,
            "amount": "$231.00",
            "status": "Pending",
            "photo": Photo4
        },
        {
            "name": "Malinga goel",
            "orderNo":456378289,
            "amount": "$536.00",
            "status": "Delivered",
            "photo": Photo5
        },
        {
            "name": "Austia Game",
            "orderNo": 735648922,
            "amount": "$974.00",
            "status": "Cancelled",
            "photo": Photo6
        }
    ]
    return(
        <div className="table-container">
            <h1 id="title">Recent Orders</h1>
            <table>
                <tr>
                    <th>Customer</th>
                    <th>Order No.</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                {tableInfo.map((data, index) => (
                <tr key={index} className="table-row">
                    <td className="name-icon"><img src={data.photo}/> {data.name}</td>
                    <td>{data.orderNo}</td>
                    <td>{data.amount}</td>
                    <td>
                        <button className={data.status ==="Delivered" ? "status-button": "status-cancel"}>{data.status}</button>
                    </td>
                </tr>
                ))}
            </table>
        </div>
    )
}

export default OrderTable;