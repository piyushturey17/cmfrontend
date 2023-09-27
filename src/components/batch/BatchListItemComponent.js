import React from "react";
import '../batch/BatchListItemComponent.css';
import { connect } from "react-redux";
import {deleteBatch} from "../../actions/BatchAction";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class BatchListItemComponent extends React.Component{
    onDeleteClick=(id)=>{
        this.props.deleteBatch(id);
    }
    render(){
        const{batch} = this.props;
        return(

            <div className="container">
            <div className="card card-body background mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto">{batch.batchIdentifier}</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{batch.batchName}</h3>
                        <p>{batch.description}</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        {/* <ul className="list-group"> */}
                        <ul className=" custom-flex-box col-lm-4">
                            {/* <a href="#">
                                <li className="list-group-item board">
                                    <i className="fa fa-flag-checkered pr-1">Project Board </i>
                                </li>
                            </a> */}
                            <Link to={`/updateBatch/${batch.batchIdentifier}`}>
                                <li className="list-group-item update">
                                    <i className="fa fa-edit pr-1 ">Update Batch</i>
                                </li>
                            </Link>
                            
                                <li className="list-group-item delete red" onClick={this.onDeleteClick.bind(this,batch.batchIdentifier)} >
                                    <i className="fa fa-minus-circle pr-1">Delete Batch</i>
                                </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}
BatchListItemComponent.propTypes={
    deleteBatch:PropTypes.func.isRequired,
}

export default connect(null,{deleteBatch}) (BatchListItemComponent);