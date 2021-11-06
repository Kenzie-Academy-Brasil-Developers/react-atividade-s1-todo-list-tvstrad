import { useState } from "react";
import "./style.css";

const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <label>Tarefa</label>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button className="button" onClick={() => addTodo(userInput)}>
        Adicionar
      </button>
    </>
  );
};

export default Form;
