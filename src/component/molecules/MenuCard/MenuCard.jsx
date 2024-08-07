import React from "react";
import { BiTargetLock } from "react-icons/bi";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

import "./MenuCard.css"
const MenuCard = () => {
    return(
        <div className="menu-card">
            <div className="menu-item">
                <div className="menu-container">
                   <div className="menu-item1"> <BiTargetLock className="goals-icon1"/></div>
                    <h3 className="menu-content">Goals</h3>
                    <div className="right-arrow"><KeyboardArrowRightTwoToneIcon/></div>
                </div>
                <div className="menu-container">
                   <div className="menu-item2"> <LunchDiningIcon className="goals-icon2"/></div>
                    <h3 className="menu-content">Popular Dishes</h3>
                    <div className="right-arrow"><KeyboardArrowRightTwoToneIcon/></div>
                </div>
                <div className="menu-container">
                   <div className="menu-item3"> <RamenDiningOutlinedIcon className="goals-icon3"/></div>
                    <h3 className="menu-content">Menus</h3>
                    <div className="right-arrow"><KeyboardArrowRightTwoToneIcon/></div>
                </div>
                
            </div>
        </div>
    )
}
export default MenuCard;