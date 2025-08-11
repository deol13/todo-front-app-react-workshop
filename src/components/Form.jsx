import React, {useState} from 'react'
import './Form.css'

const Form = (props) => {
    // Sets up variables and their set methods.
    const [title, setTile] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [assignToPerson, setAssignToPerson] = useState('');
    const [attachments, setAttachments] = useState('');

    const [errors, setErrors] = useState({});


    // Event listeners, they listen to any changes in title, description, ....
    // Saves the new data to the variables above.
    const changeTitle = (event) => {
        setTile(event.target.value);
    };
    const changeDescription = (event) => {
        setDescription(event.target.value);
    };
    const changeDueDate = (event) => {
        setDueDate(event.target.value);
    };
    const changeAssignToPerson = (event) => {
        setAssignToPerson(event.target.value);
    };
    const changeAttachments = (event) => {
        setAttachments(event.target.files);
    };
    /*
    // Is it better to handle everything in one?
     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    */

    // This is called when the submit button is clicked, 
    // it sends all the data to the prop gotten from card which is addRows method that adds a new row with the data.
    // It also clears the variables of any values.

    // It also validates the form and shows error messages if there are any.
    // It also removes the time from the date string.
    // It also prevents the default form submission behavior.
    // It also checks for errors and shows them if there are any.
    const transferValue = (event) => {
        event.preventDefault();

        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');

            let created = removeTime(new Date().toLocaleString("sv-SE"));

            const val = {
                title,
                description,
                dueDate,
                assignToPerson,
                attachments,
                created,
            };
            props.func(val);
            clearState();
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    // Validates the form inputs and returns an object with error messages.
    // If there are no errors, it returns an empty object.
    const validateForm = () => {
        const errors = {};

        if(!title.trim())  {
            errors.title = 'Title is required'
        } else if(title.length < 10) {
            errors.title = 'Title must be at least 10 characters long'
        }

        if(!description.trim()) {
            errors.description = 'Description is required'
        } else if(description.length < 10) {
            errors.description = 'Description must be at least 20 characters long'
        }

        if(!dueDate) {
            errors.dueDate = 'Due date is required'
        }

        return errors;
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


    // Used to set the min date that can be choosen in the date input.
    const todayStr = new Date().toISOString().split("T")[0];

    // Should titles and person options come from arrays?

    return (
        <div className="container border rounded bg-white mt-3 clearfix">
            <form id="addTodoForm">
                <div className="mb-3 mt-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={changeTitle}/>
                    {errors.title && (
                        <span className="error-message">
                            {errors.title}
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3" id="description" name="description" value={description} onChange={changeDescription}></textarea>
                    {errors.description && (
                        <span className="error-message">
                            {errors.description}
                        </span>
                    )}
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <label className="form-label" lang="en-GB">Due Date</label>
                        <input type="date" className="form-control" id="dueDate" name="dueDate" min={todayStr} value={dueDate} onChange={changeDueDate}/>
                        {errors.dueDate && (
                        <span className="error-message">
                            {errors.dueDate}
                        </span>
                    )}
                    </div>
                    <div className="mb-3 col-sm-6">
                        <label className="form-label">Assign to Person (Optional)</label>
                        <select className="form-select" id="assignToPerson" name="assignToPerson" value={assignToPerson} onChange={changeAssignToPerson}>
                            <option value="">-- Select Person (Optional) --</option>
                            <option value="Dennis Olsen">Dennis Olsen</option>
                            <option value="Johan Karlsson">Johan Karlsson</option>
                            <option value="Emil Sundsberg">Emil Sundsberg</option>
                        </select>
                    </div>
                </div> 
                <label className="form-label">Attachments</label>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="fileForm" name="formFile" lang="en-GB" multiple onChange={changeAttachments}/>
                    <button type="reset" className="btn btn-outline-secondary reset">x</button>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="2" id="comment" name="comment" ></textarea>
                </div>
            
                <button type="button" className="btn btn-primary mb-3 float-md-end" id="reg-Todo-Btn" onClick={transferValue}>Add Todo</button>
            </form>
        </div>
    );
};

export default Form;