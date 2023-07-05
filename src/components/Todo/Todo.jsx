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
        await todoAPI.deleteTodo({
            id: todo._id
        });
        window.location.reload(false);
    }

    async function incrementStatus() {
        await todoAPI.incrementStatus({
            id: todo._id,
            status: todo.status
        });
        window.location.reload(false);
    }

    async function decrementStatus() {
        await todoAPI.decrementStatus({
            id: todo._id,
            status: todo.status
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
                <button className='todo-btn' onClick={decrementStatus}>{'<'}</button>
                <button className='todo-btn' onClick={incrementStatus}>{'>'}</button>
                <button className='todo-btn' onClick={deleteTodo}>-</button>
            </div>
        </div>
    )
}