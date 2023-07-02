import { useState } from 'react';
//import StatusColumn from '../../components/StatusColumn/StatusColumn';
import * as todoAPI from '../../utilities/todo-api';


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
    }

    
    return (
        <>
            <h1>Todos</h1>

            {todos.map((todo, idx) => (
                <p key={idx}>{todo.text}</p>
            ))}

            <form onSubmit={handleSubmit}>
                <label>add to do</label>
                <input 
                    name='text'
                    type='textarea'
                    value={newTodo.name}
                    onChange={handleChange}
                    required
                    />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}