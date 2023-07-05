import Todo from '../../components/Todo/Todo';
import './StatusColumn.css'


export default function StatusColumn({ title, todos, filter, setTodos }) {
    return (
        <div className='status-column-div box-shadow'>
            <h4 className='status-column-title'>{title}</h4>

            { todos.length ?
            <div className='todo-case'>
                {todos.filter((todo) => {
                    return todo.status === filter
                }).map((todo, idx) => (
                    <Todo key={idx} todo={todo} setTodos={setTodos} />
                ))}
            </div>
            :
                <p className='status-column-p'>nothing here yet...</p>
            }
        </div>
    )
}