import React from "react";
import {getBatch,createBatch} from "../../actions/BatchAction";
import {connect}from "react-redux";
import PropTypes from "prop-types";
import withParam from "../commons/withParams";


class UpdateBatchComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:"",
            batchName:"",
            batchIdentifier:"",
            description:"",
            batch_start_date:"",
            batch_end_date:""
        };
    }

    componentWillReceiveProps(nextProps){
        const {
            id,
            batchName,
            batchIdentifier,
            description,
            batch_start_date,
            batch_end_date
        } = nextProps.batch;

        this.setState({
            id,
            batchName,
            batchIdentifier,
            description,
            batch_start_date,
            batch_end_date,
        })
    }

    componentDidMount(){
        const {id} = this.props.params;
        this.props.getBatch(id);
    }
    onChange = (event)=>{
        this.setState({[event.target.name]:event.target.value});
       };

       onSubmit=(event)=>{
        event.preventDefault();
        const updatedBatch={
            id:this.state.id,
            batchName:this.state.batchName,
            batchIdentifier:this.state.batchIdentifier,
            description:this.state.description,
            batch_start_date:this.state.batch_start_date,
            batch_end_date:this.state.batch_end_date,
        };
        this.props.createBatch(updatedBatch,this.props.navigate);
       };
    render(){
        return(
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Edit Batch</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text"
                                 className="form-control form-control-lg "
                                  placeholder="Batch Name" 
                                  name="batchName"
                                  value={this.state.batchName}
                                  onChange={this.onChange}
                                  />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                className="form-control form-control-lg"
                                placeholder="Unique Batch ID"
                                    disabled 
                                name="batchIdentifier"
                                value={this.state.batchIdentifier}
                                onChange={this.onChange}  
                                    />
                            </div>
                            {/* disabled for Edit Only!! remove "disabled" for the Create operation  */}
                            <div className="form-group">
                                <textarea className="form-control form-control-lg"
                                placeholder="Batch Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                
                                ></textarea>
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                className="form-control form-control-lg" 
                                name="batch_start_date"
                                value={this.batch_start_date}
                                onChange={this.onChange}
                                />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" 
                                className="form-control form-control-lg" 
                                name="batch_end_date" 
                                value={this.batch_end_date}
                                onChange={this.onChange}
                                />
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

UpdateBatchComponent.propTypes = {
    getBatch:PropTypes.func.isRequired,
    createBatch:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    batch:state.batchs.batch,
});
export default connect(mapStateToProps,{getBatch,createBatch})
(withParam(UpdateBatchComponent));