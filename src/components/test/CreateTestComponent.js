import React from 'react'
import '../test/CreateTestComponent.css';

// import CreateTestComponent from "./CreateTestComponent";

class CreateTestComponent extends React.Component{
    render(){
        return(

            <div class="task-conatiner">
   {/* Test section */}


    <section class="section-task">
      <h1 class="heading-test">Create Test</h1>
      <div class="task">
        <div class="dropdown">
          <button class="dropbtnt">Type</button>
          {/* <div class="dropdown-content">
            <a href="#">Easy</a>
            <a href="#">Medium</a>
            <a href="#">Hard</a>
          </div> */}
        </div>
        <div class="dropdown">
          <button class="dropbtnt">Technology</button>
          {/* <div class="dropdown-content">
            <a href="#">Java</a>
            <a href="#">Python</a>
            <a href="#">C++</a>
          </div> */}
        </div>
      </div>
    </section>


    {/* Text box section */}


    <section class="chat-section">
      <div class="chat-container-one">
        <h2 class="test-heading">Test Name</h2>
        <div class="chat-box">
          <input placeholder="Test name.." name="msg" required></input>
        </div>
      </div>
    </section>


    {/* description section */}


    <section class="type-box">
      <div class="container-one">
        <div class="textarea-description">
          <h2>Description</h2>
          <textarea id="textarea1" rows="6" cols="8" placeholder="Type here..."></textarea>
        </div>
        <div class="textarea-instruction">
          <h2>Instruction</h2>
          <textarea id="textarea2" rows="6" cols="8" placeholder="Type here...."></textarea>
        </div>
      </div>


      {/* Save and next section */}


      <button class="save-next-button">Save and Next</button>
    </section>
  </div>
 


        )
    }
}
export default CreateTestComponent;