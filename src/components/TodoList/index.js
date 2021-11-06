import "./style.css";
const TodoList = ({ todos, handleTodo }) => {
  return (
    <>
      <ul>
        {todos.map((chore, index) => (
          <li className="item" key={index}>
            {chore}
            <button className="button" onClick={() => handleTodo(chore)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoList;
