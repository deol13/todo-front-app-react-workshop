import React, {useState} from 'react';
import './Todos.css'
import Todos from './Todos'
import TodoForm from './TodoForm'

const todoTestData = [
    {id: 0, title: "Example1", description: "Description of example1", dueDate: "2025-08-15", assignToPerson: "Dennis Olsen", attachments: [], created: "2025-07-29"},
    {id: 1, title: "Example2", description: "Description of example2", dueDate: "2025-08-18", assignToPerson: "Johan Karlsson", attachments: ["exampleFile"], created: "2025-07-29"}
]

const TodosBody = () => {
    const [todoData, setTodoData] = useState(todoTestData);

    const addCards = (data) => {
        const totalTodos = todoData.length;
        data.id = totalTodos + 1;
        const updatedTodoData = [...todoData];
        updatedTodoData.push(data);
        setTodoData(updatedTodoData);
    }

    // Function to remove time from date string
    const removeCard = (id) => {
        setTodoData(todoData.filter(item => item.id !== id));
    }

    return (
        <>
        <TodoForm func={addCards}/>
        <div className="container mt-3 card" id="cardDiv">
            <div className="card-header bg-white">
                
                <div className="btn-toolbar justify-content-between" role="toolbar">
                    <h5 className="pt-1">Todos</h5>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-show-cards">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                            </svg>
                        </button>
                        <button className="btn btn-sort-cards">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-sort-down" viewBox="0 0 16 16">
                                <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {todoData && todoData.map((data) => (
                    <Todos key={data.id} 
                    id={data.id}
                    title={data.title}
                    description={data.description} 
                    dueDate={data.dueDate} 
                    assignToPerson={data.assignToPerson} 
                    attachments={data.attachments} 
                    created={data.created} 
                    removeFunc={() => removeCard(data.id)} 
                    />
            ))}
        </div>
        </>
    );
};

export default TodosBody;