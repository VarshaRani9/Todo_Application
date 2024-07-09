/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const Todos = ({todos, onMarkAsCompleted}) =>{
    return (
        <>
          {todos.map((todo, index) =>{
            return <div key={index} className="todos">
                <h2 className="todo_title">{todo.title}</h2>
                <p className="todo_description">{todo.description}</p>
                <button className={todo.completed ? "completedTodos" : "notCompletedTodos"} onClick={() => {
                  onMarkAsCompleted(todo._id)}} >{todo.completed == true? "Completed !!": "Mark as Completed..."}</button>
            </div>
          })}
        </>
    )
}

export default Todos