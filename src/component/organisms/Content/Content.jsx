import React from "react";
import { Grid } from '@mui/material';
import Cards from "../../molecules/Cards/Cards"
import DataChart from "../../molecules/DataChart/DataChart"
import OrderTable from "../../molecules/OrderTable/OrderTable"
import AchivedGoals from "../../molecules/AchivedGoals/AchivedGoals"
import MenuCard from "../../molecules/MenuCard/MenuCard"
import Reviews from "../../molecules/Reviews/Reviews"
import "./Content.css"

const Content = () => {
    return(
        <div className="main-content">
            <h1 className="heading">Dashboard</h1>
            <Grid container spacing={2} className="content">
                <Grid item xs={12} sm={8} className="content-1">
                    <Cards/>
                    <DataChart/>
                    <OrderTable/>
                </Grid>
                <Grid xs={12} sm={4}  className="content-2">
                    <AchivedGoals/>
                    <MenuCard/>
                    <Reviews/>
                </Grid>
               
            </Grid>
        </div>
    )
}
export default Content;