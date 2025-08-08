import React, {useState} from 'react'
import './Form.css'

const Form = (props) => {
    // Sets up variables and their set methods.
    const [title, setTile] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [assignToPerson, setAssignToPerson] = useState('');
    const [attachments, setAttachments] = useState('');


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

    // This is called when the submit button is clicked, 
    // it sends all the data to the prop gotten from card which is addRows method that adds a new row with the data.
    // It also clears the variables of any values.
    const transferValue = (event) => {
        event.preventDefault();
        let cDate = removeTime(new Date().toLocaleString("sv-SE"));

        console.log(attachments);

        const val = {
            title,
            description,
            dueDate,
            assignToPerson,
            attachments,
            cDate,
        };
        props.func(val);
        clearState();
    };

    const clearState = () => {
        setTile('');
        setDescription('');
        setDueDate('');
        setAssignToPerson('');
        setAttachments('');
    };

    const removeTime = (date) => {
    // Used to remove time.
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
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3" id="description" name="description" value={description} onChange={changeDescription}></textarea>
                </div>
                <div className="row">
                    <div className="mb-3 col-sm-6">
                        <label className="form-label" lang="en-GB">Due Date</label>
                        <input type="date" className="form-control" id="dueDate" name="dueDate" min={todayStr} value={dueDate} onChange={changeDueDate}/>
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