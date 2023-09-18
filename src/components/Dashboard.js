// Changes in dashboard
//this is branch 2
import './Dashboard.css';
import React from "react";


import TrainerDashboardComponent from './trainerDashboard/TrainerDashboardItemComponent';

class Dashboard extends React.Component{
    render(){
        return(
        
            <TrainerDashboardComponent/>

        );
    }
}
export default Dashboard;