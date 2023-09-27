import React from "react";
// import TestListItemComponent from "./TestListItemComponent";
import BatchListItemComponent from "./BatchListItemComponent";

// import '../test/TestListComponent.css';
import { getBatchs } from "../../actions/BatchAction";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class BatchListComponent extends React.Component{
 componentDidMount(){
    this.props.getBatchs();
 }
   
    render(){
        const {batchs} = this.props.batchs;
        return(
            
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {/* <h1 className="display-4 text-center">Test List</h1> */}
                        <br/>
                        <br/>
                        <h1 className="text-body-secondary font-weight-bold text-center">Batch List</h1>
                        <br />
                       
                      
                        
    
                        {batchs.map((batch)=>(
                            <BatchListItemComponent key={batch.id} batch={batch}/>
                            
                        ))}
                        
                            
                        
    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

BatchListComponent.propTypes={
    getBatchs:PropTypes.func.isRequired,
}

const mapStateToProps=(state)=>({
    batchs:state.batchs,
})
export default connect(mapStateToProps,{getBatchs})(BatchListComponent);

