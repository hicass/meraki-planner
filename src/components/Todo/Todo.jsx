//import { Draggable } from 'react-beautiful-dnd';


export default function Todo({ todo, idx }) {

    
    return (
        <div draggable='true'>
            {todo.text}
        </div>
    )
}