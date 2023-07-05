import EasyEdit, { Types } from 'react-easy-edit';
import * as todoAPI from '../../utilities/todo-api'
import './Todo.css'


export default function Todo({ todo, idx, setTodos }) { 

    async function saveChanges(updatedTodo) {
        await todoAPI.update({
            id: todo._id,
            text: updatedTodo
        });
    }

    async function deleteTodo(evt) {
        const updatedTodos = await todoAPI.deleteTodo({
            id: todo._id
        });
        window.location.reload(false);
    }

    return (
        <div className='todo' draggable='true'>
            <EasyEdit 
                value={todo.text}
                type={Types.TEXTAREA}
                onSave={saveChanges}
            />
            <div className='todo-btn-div'>
                <button className='todo-btn'>{'<'}</button>
                <button className='todo-btn'>{'>'}</button>
                <button onClick={deleteTodo}>delete</button>
            </div>
        </div>
    )
}