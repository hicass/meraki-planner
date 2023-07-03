import Todo from '../../components/Todo/Todo';

export default function StatusColumn({ title, todos, filter }) {

    return (
        <div>
            <h4>{title}</h4>

            { todos.length ?
            <div>
                {todos.filter((todo) => {
                    return todo.status === filter
                }).map((todo, idx) => (
                    <Todo key={idx} todo={todo}/>
                ))}
            </div>
            :
                <p>nothing here yet...</p>
            }
        </div>
    )
}