// Changes in dashboard
//this is branch 2
import './Dashboard.css';
import React from "react";

import img1 from './dashboardimg/graph.jpeg';
import img2 from './dashboardimg/bar.jpeg';

class Dashboard extends React.Component{
    render(){
        return(
        
            <section className="trainer-dashboard">
            <div className="trainer-dashboard-container">
              <div className="dashboard-container-box">
                <div className="credit-usage">
                  <span>Credit Usage</span>
                 
                  <img src={img1} alt="" className="credit-usage-img" />
                 
                </div>
              </div>
        
              <div className="dashboard-container-box">
                <div className="test-candidates">
                  <span>Test & Candidates</span>
                  <img src={img2} alt="" />
                </div>
              </div>
        
              <div className="dashboard-container-box">
                <div className="schedule-test">
                  <span>Today's Schedule Test</span>
        
                  <table>
                    <tr>
                      <th>Test Date</th>
                      <th>Number of Test</th>
                      <th>Test Status</th>
                    </tr>
                    <tr>
                      <td>02/10/2022</td>
                      <td>2</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>03/10/2022</td>
                      <td>4</td>
                      <td>In-Progress</td>
                    </tr>
                    <tr>
                      <td>13/10/2022</td>
                      <td>7</td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>03/10/2022</td>
                      <td>4</td>
                      <td>Completed</td>
                    </tr>
                  </table>
                </div>
              </div>
        
              <div className="dashboard-container-box">
                <div className="test-performers">
                  <span>Top Performers</span>
        
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Test</th>
                      <th>Percent</th>
                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Java</td>
                      <td>70</td>
                    </tr>
                    <tr>
                      <td>Centro comercial</td>
                      <td>Python</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>PHP</td>
                      <td>79</td>
                    </tr>
                    <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>C++</td>
                      <td>87</td>
                    </tr>
                  </table>
                </div>
              </div>
        
              <div className="dashboard-container-box">
                <div className="short-listed">
                  <span>Shortlisted</span>
        
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Batch</th>
                    </tr>
                    <tr>
                      <td>Alfreds </td>
                      <td>alffur@gmail.com</td>
                      <td>Jan-22</td>
                    </tr>
                    <tr>
                      <td>Centro </td>
                      <td>centrocom@gmail.com</td>
                      <td>April-22</td>
                    </tr>
                    <tr>
                      <td>Alfreds </td>
                      <td>alffut@gmail.com</td>
                      <td>Mar-22</td>
                    </tr>
                    <tr>
                      <td>John Mac</td>
                      <td>mac@gmail.com</td>
                      <td>Feb-22</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </section>

        );
    }
}
export default Dashboard;