import EasyEdit, { Types } from 'react-easy-edit';
import './Todo.css'


export default function Todo({ todo, idx }) { 
    return (
        <div className='todo' draggable='true'>
            <EasyEdit 
                value={todo.text}
                type={Types.TEXTAREA}
                hideDeleteButton={false}
            />
            <div className='todo-btn-div'>
                <button className='todo-btn'>{'<'}</button>
                <button className='todo-btn'>{'>'}</button>
            </div>
        </div>
    )
}