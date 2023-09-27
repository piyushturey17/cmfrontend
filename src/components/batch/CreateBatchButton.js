import React from "react";
import { Link } from "react-router-dom";
import './CreateBatchButton.css';
const CreateBatchButton = () => {
    return (
        <Link to="/addBatch" className="create-test-button">Create Batch</Link>
    )
}
export default CreateBatchButton;