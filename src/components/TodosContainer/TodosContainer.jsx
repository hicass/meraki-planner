import { useState } from 'react';
import StatusColumn from '../../components/StatusColumn/StatusColumn';
import * as todoAPI from '../../utilities/todo-api';
import './TodosContainer.css';


export default function Todos({ project, projectId, todos, setTodos }) {
    const [newTodo, setNewTodo] = useState({
        text: ''
    });

    function handleChange(evt) {
        setNewTodo({
            ...newTodo,
            [evt.target.name]: evt.target.value
        })
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedTodos = await todoAPI.addTodo({
            projectId: projectId,
            newTodo: newTodo
        });
        setTodos(updatedTodos)
        setNewTodo({
            text: ''
        })
    }

    
    return (
        <>
            <h3 id='todo-h3'>To Dos:</h3>

            <form id='todo-form' onSubmit={handleSubmit}>
                <input 
                    className='box-shadow'
                    id='todo-form-text'
                    name='text'
                    type='textarea'
                    value={newTodo.text}
                    onChange={handleChange}
                    placeholder='New To Do...'
                    required
                    />
                <button className='box-shadow' id='todo-form-btn' type='submit'>add +</button>
            </form>

            <div id='status-column-container'>
                <StatusColumn  title={'Backlog'} todos={todos} filter={'backlog'} />
                <StatusColumn title={'Committed Backlog'} todos={todos} filter={'committedBacklog'}/>
                <StatusColumn title={'In Progress'} todos={todos} filter={'inProgress'}/>
                <StatusColumn title={'Done'} todos={todos} filter={'done'} />
            </div>

        </>
    )
}