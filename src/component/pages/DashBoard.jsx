import React from "react";
import Header from "../organisms/Header/Header"
import SideBar from "../organisms/SideBar/SideBar";
import Content from "../organisms/Content/Content"
import "./DashBoard.css"

const DashBoard = () => {
    return(
      <div className="dashboard" >
        <Header/>
        <div className="flex">
        <SideBar/>
        <Content/>
        </div>
      </div>           
    )
};
export default DashBoard;