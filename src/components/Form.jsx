import React from 'react'
import './Form.css'

const Form = () => {
    // Should titles and person options come from arrays?

    return (
        <div className="container border rounded bg-white mt-3 clearfix">
            <form id="addTodoForm">
                <div className="mb-3 mt-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3" id="description" name="description"></textarea>
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <label className="form-label" lang="en-GB">Due Date</label>
                        <input type="date" className="form-control" id="dueDate" name="dueDate" />
                    </div>
                    <div className="mb-3 col-sm-6">
                        <label className="form-label">Assign to Person (Optional)</label>
                        <select className="form-select" id="assignToPerson" name="assignToPerson">
                            <option value="">-- Select Person (Optional) --</option>
                            <option value="Dennis Olsen">Dennis Olsen</option>
                            <option value="Johan Karlsson">Johan Karlsson</option>
                            <option value="Emil Sundsberg">Emil Sundsberg</option>
                        </select>
                    </div>
                </div> 
                <label className="form-label">Attachments</label>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="fileForm" name="formFile" lang="en-GB" multiple/>
                    <button type="reset" className="btn btn-outline-secondary reset">x</button>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="2" id="comment" name="comment" ></textarea>
                </div>
            
                <button type="button" className="btn btn-primary mb-3 float-md-end" id="reg-Todo-Btn">Add Todo</button>
            </form>
        </div>
    );
};

export default Form;