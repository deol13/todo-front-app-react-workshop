import React, {useState} from 'react'
import './TodoForm.css'
import { useForm } from "react-hook-form";




const TodoForm = (props) => {
    // Used to set the min date that can be choosen in the date input.
    const todayStr = new Date().toISOString().split("T")[0];

    const { register, 
        handleSubmit, 
        formState: { errors } } = 
        useForm({
            title: "", 
            description: "", 
            dueDate: "",
            assignToPerson: "",
            attachments: ""});
        
     const onSubmit = (data) => {
        console.log(data);

        let created = removeTime(new Date().toLocaleString("sv-SE"));

        data.created = created;

        props.func(data);
        clearState();
    }

    const clearState = () => {
        setTile('');
        setDescription('');
        setDueDate('');
        setAssignToPerson('');
        setAttachments('');
    };

    // Used to remove time from date string.
    // It splits the date string at the space and returns only the date part.
    const removeTime = (date) => {
        let dateTime = date.split(' ');
        return dateTime[0];
    }

    return (
        <div className="container border rounded mt-3 clearfix" onSubmit={handleSubmit(onSubmit)}>
            <form id="addTodoForm">
                <div className="mb-3 mt-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" 
                    {...register("title", {required: "Title is required", minLength: {value: 10, message:"Title must be more than 10 characters." }, maxLength:{value: 40, message:"Title must be less than 40 characters."}})}/>
                    {errors.title ? (
                        <>
                            {errors.title.type === "required" && (
                                <span className="error-message">
                                    {errors.title.message}
                                </span>      
                            )}
                            {errors.minLength < 10 && (
                                <span className="error-message">
                                    {errors.title.message}
                                </span>      
                            )}
                            {errors.maxLength > 40 && (
                                <span className="error-message">
                                    {errors.title.message}
                                </span>      
                            )}
                        </>
                    ) : null }
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3" id="description" name="description" 
                    {...register("description", {required: true, minLength: 10})}></textarea>
                    {errors.description && 
                        <span className="error-message">
                            Description is required.
                        </span>
                    }
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <label className="form-label" lang="en-GB">Due Date</label>
                        <input type="date" className="form-control" id="dueDate" name="dueDate" min={todayStr} 
                        {...register("dueDate", {required: true})}/>
                        {errors.dueDate &&
                        <span className="error-message">
                            DueDate is required.
                        </span>
                    }
                    </div>
                    <div className="mb-3 col-sm-6">
                        <label className="form-label">Assign to Person (Optional)</label>
                        <select className="form-select" id="assignToPerson" name="assignToPerson" 
                        {...register("assignToPerson")}>
                            <option value="">-- Select Person (Optional) --</option>
                            <option value="Dennis Olsen">Dennis Olsen</option>
                            <option value="Johan Karlsson">Johan Karlsson</option>
                            <option value="Emil Sundsberg">Emil Sundsberg</option>
                        </select>
                    </div>
                </div> 
                <label className="form-label">Attachments</label>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="fileForm" name="formFile" lang="en-GB" multiple 
                    {...register("attachments")}></input>
                    <button type="reset" className="btn btn-outline-secondary reset">x</button>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="2" id="comment" name="comment" ></textarea>
                </div>
            
                <button type="submit" className="btn btn-primary mb-3 float-md-end" id="reg-Todo-Btn">Add Todo</button>
            </form>
        </div>
    );
};

export default TodoForm;