import React from "react";
import TestListItemComponent from "./TestListItemComponent";
// import '../test/TestListComponent.css';

class TestListComponent extends React.Component{
    render(){
        // const {project} = this.props;
        return(
            
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Test List</h1>
                        <br />
                        {/* <a href="ProjectForm.html" className="btn btn-lg btn-info">
                            Create Test
                        </a> */}
                        <br />
                        <hr />
    
                         {/* Project Item Component */}
                            {/* TestListItemComponent */}
                            <TestListItemComponent/>
                         {/* End of Project Item Component  */}
    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default TestListComponent;