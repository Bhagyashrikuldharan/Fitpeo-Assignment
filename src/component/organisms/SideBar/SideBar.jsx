import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TbClipboardCheck } from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

import "./SideBar.css"

const Sidebar = () => {
    return(
        <div>
            <div className="container">
                <ul id="sidebar">
                    <li class="active"><AiFillHome/></li>
                    <li><AssessmentOutlinedIcon/></li>
                    <li><TbClipboardCheck/></li>
                    <li><CiWallet/></li>
                    <li><BsBagCheck/></li>
                </ul>
            </div> 
        </div>
    )
};
export default Sidebar;