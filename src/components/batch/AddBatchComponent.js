import React from "react";
import { createBatch } from "../../actions/BatchAction";
import {connect} from "react-redux";
import withRouter from "../commons/withRouter";
import PropTypes from "prop-types";
import classNames from "classnames";

class AddBatchComponent extends React.Component{
    
   constructor(){
    super();
    this.state={batchName:"",
    batchIdentifier:"",
    description:"",
    batch_start_date:"",
    batch_end_date:"",
    errors:{},
    };
   }

   componentWillReceiveProps(nextProps) {
    console.log("----componentWillReceiveProps() executed because form has errors");
    if(nextProps.errors){
        this.setState({
            errors: nextProps.errors,
        });
    }
}
   
   onChange = (event)=>{
    this.setState({[event.target.name]:event.target.value});
   };
   onSubmit=(event)=>{
    event.preventDefault();//stops browser refresh
    // console.log("--Submit called---");
    const newbatch = 
        {batchName:this.state.batchName,
    batchIdentifier:this.state.batchIdentifier,
    description:this.state.description,
    batch_start_date:this.state.batch_start_date,
    batch_end_date:this.state.batch_end_date}
    
    //Call axios method over here to send the call on backend
    this.props.createBatch(newbatch,this.props.navigate);
    // this.props.navigate("/listbatch")
    // console.log(newbatch);
   }
    render(){
        const errors = this.state.errors;
        return(
            <div className="project">
            <div className="container ">
                <div className="row">
                    <div className="col-md-8 m-auto ">
                        <br/>
                        <h5 className="h1 text-center">Create batch</h5>
                        
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group ">
                                <input type="text" 
                                 className={classNames("form-control form-control-lg background" ,{
                                    "is-invalid":errors.batchName
                                })}
                                 placeholder="batch Name" 
                                 name="batchName"
                                 value={this.state.batchName}
                                 onChange={this.onChange}
                                 />
                                 {errors.batchName &&(
                                    <p className="invalid-feedback">{errors.batchName}</p>
                                )}
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="text" 
                                 className={classNames("form-control form-control-lg background" ,{
                                    "is-invalid":errors.batchIdentifier
                                })} 
                                placeholder="Unique batch ID"
                                name="batchIdentifier"
                                value={this.state.batchIdentifier}
                                onChange={this.onChange}
                                     />
                                {errors.batchIdentifier &&(
                                    <p className="invalid-feedback">{errors.batchIdentifier}</p>
                                )}
                            </div>
                            <br/>
                            {/* disabled for Edit Only!! remove "disabled" for the Create operation */}
                            <div className="form-group">
                                <input type="text" 
                                 className={classNames("form-control form-control-lg background" ,{
                                    "is-invalid":errors.description
                                })} 
                                placeholder="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                     />
                                {errors.description &&(
                                    <p className="invalid-feedback">{errors.description}</p>
                                )}
                            </div>
                            <br/>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                className={classNames("form-control form-control-lg background" ,{
                                    "is-invalid":errors.batch_start_date
                                })} 
                                name="batch_start_date"
                                value={this.state.batch_start_date}
                                onChange={this.onChange}
                                />
                                {errors.batch_start_date &&(
                                    <p className="invalid-feedback">{errors.batch_start_date}</p>
                                )}
                            </div>
                            <br/>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                className={classNames("form-control form-control-lg background" ,{
                                    "is-invalid":errors.batch_end_date
                                })}
                                 name="batch_end_date" 
                                 value={this.state.batch_end_date}
                                 onChange={this.onChange}
                                 />
                                  {errors.batch_start_date &&(
                                    <p className="invalid-feedback">{errors.batch_end_date}</p>
                                )}
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddBatchComponent.propTypes={
    errors:PropTypes.object.isRequired,
    createBatch:PropTypes.func.isRequired,
}

const mapStateToProps = (state) =>({
    errors:state.errors,
});

export default connect(mapStateToProps,{createBatch}) (withRouter(AddBatchComponent));