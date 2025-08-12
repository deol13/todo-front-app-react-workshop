import React, {useState} from 'react';
import './Todos.css'

const TodoCard = ({id, title, description, dueDate, assignToPerson, attachments, created, removeFunc}) => {

    // Maps through the todoData array and creates a card for each item.
    // Each card displays the title, description, due date, assigned person, and number of attachments.
    // It also includes buttons for checking, editing, and removing the card.
    // The buttons have icons and are styled with Bootstrap classes.
    // The removeCard function is called when the remove button is clicked, passing the id of
    // the card to be removed.
    return (
        <div className="card-body">
        <div className="border border-1 rounded">
            <div className="btn-toolbar justify-content-between">
                <div className="input-group">
                    <h6 className="card-title pt-2 ps-3">{title}</h6>
                </div>
                <div className="btn-group mt-2 me-3">
                    <p className="card-text ps-3 pe-3">Created: {created}</p>
                    <div className="btn-group float-sm-end">
                        <button type="button" className="btn btn-check-card">
                            <i className="bi bi-check2 icon-check"></i>
                        </button>
                        <button type="button" className="btn btn-edit-card">
                             <i className="bi bi-pencil icon-edit"></i>
                        </button>
                        <button type="button" className="btn btn-remove-card" onClick={removeFunc}>
                            <i className="bi bi-trash icon-remove"></i>
                        </button>
                    </div>
                </div>
            </div>
        
            <p className="card-text ps-3">{description}</p>
            
            <div className="btn-toolbar mb-3 ms-3">
                <div className="input-group me-2">      
                    <p className="card-text ">
                        <i className="bi bi-calendar-event icon-size me-1"></i>
                        Due: {dueDate}
                    </p>
                </div>
                <div className="input-group me-2">
                    <p className="card-text text-center cardAssignedTo ps-1 pe-1">
                        <i className="bi bi-person icon-size"></i>
                        {assignToPerson}
                    </p>
                </div>
                <div className="input-group">
                    <p className="card-text text-center cardAttachementNr ps-1 pe-1">
                        <i className="bi bi-paperclip icon-size"></i>
                        {attachments && (attachments.length)} attachments
                    </p>
                </div>
            </div>
        </div>                  
    </div>
    );
};

export default TodoCard;