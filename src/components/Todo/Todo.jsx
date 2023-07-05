import EasyEdit, { Types } from 'react-easy-edit';
import * as todoAPI from '../../utilities/todo-api'
import './Todo.css'


export default function Todo({ todo, idx }) { 

    async function saveChanges(updatedTodo) {
        await todoAPI.update({
            id: todo._id,
            text: updatedTodo
        });
    }

    return (
        <div className='todo' draggable='true'>
            <EasyEdit 
                value={todo.text}
                type={Types.TEXTAREA}
                onSave={saveChanges}
                hideDeleteButton={false}
            />
            <div className='todo-btn-div'>
                <button className='todo-btn'>{'<'}</button>
                <button className='todo-btn'>{'>'}</button>
            </div>
        </div>
    )
}