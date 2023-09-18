import React from "react";
import '../layouts/HeaderComponent.css'
import img1 from './headerimg/codemarker4.png';
import img2 from './headerimg/customer-4.jpg';
import img3 from './headerimg/Male User.png';
import img4 from './headerimg/Frame 8.png';
import img5 from './headerimg/Group 50.png';

class HeaderComponent extends React.Component{
   render(){
    return(
    <header class="header">
    <section class="navigation-container">
      <nav class="nav-bar">
        <img src={img1} alt="" class="nav-logo-image"/>


        <span class="navbardrop">
        
          <div><a href="trainer-dashboard.html" class="dashboard-button navbardropbtn">Dashboard</a></div>

          
        </span>

        <span class="navbardrop">
          <button class="navbardropbtn">Test Management</button>
          <div class="navbardrop-content">
            <div><a href="create-technology.html" class="create-technology-button">Create Technology</a></div>
            <div><a href="list-question.html" class="list-technology-button">List Question</a></div>
            <div><a href="create-test.html" class="create-test-button">Create Test</a></div>
           

          </div>
        </span>

        <span class="navbardrop">
          <button class="navbardropbtn">User Management</button>
          <div class="navbardrop-content">
            <div>Create User</div>
            <div>List User</div>
            <div>Update User</div>
          </div>
        </span>

        <span class="navbardrop">
          <button class="navbardropbtn">Reports</button>
          <div class="navbardrop-content">
            <div>Create Report</div>
            <div>Update Reports</div>
            <div>Reports List</div>
          </div>
        </span>

        <img src={img2} alt="" class="user-image" onclick="toggleMenu()"/>

        <div class="user-menu-wrap" id="subMenu">
          <div class="user-sub-menu">
            <div class="user-info">
              <img src={img2} alt=""/>
              <h3>Jhon Paterik</h3>
            </div>

            <hr/>

            <a href="#" class="sub-menu-link">
              <img src={img3} alt=""/>
              <p>Edit Profile</p>
              <span></span>
            </a>
            <a href="#" class="sub-menu-link">
              <img src={img4} alt=""/>
              <p>Settings</p>
              <span></span>
            </a>
           
            <div class="logout-span">
              <div><img src={img5} alt=""/></div>

              <div><a href="index.html" class="logout-button">Logout</a></div>
            </div>

          </div>
        </div>
      </nav>
    </section>


    <script>
      {/* let subMenu = document.getElementById("subMenu");

      function toggleMenu() {
        subMenu.classList.toggle("open-menu")
      }

      window.onclick = function (event) {
        if (!event.target.matches(".user-image")) {
          var dd = document.getElementsByClassName("user-menu-wrap");
          for (var i = 0; i < dd.length; i++) {
            var x = dd[i];

            if (x.classList.contains("open-menu")) { x.classList.remove("open-menu") }
          }


        }
      } */}

    </script>
  </header>
    )
   }
}

export default HeaderComponent;