import EasyEdit, { Types } from 'react-easy-edit';

export default function Todo({ todo, idx }) {

    
    return (
        <div draggable='true'>
            <EasyEdit 
                value={todo.text}
                type={Types.TEXTAREA}
            />
            <button>{'<'}</button>
            <button>{'>'}</button>
        </div>
    )
}