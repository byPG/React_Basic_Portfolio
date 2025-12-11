import { useState } from "react";

function App() {
  const [textTask, setTextTask] = useState(""); // tekst który wpisujesz do inputa - zadanie
  const [tasks, setTasks] = useState([]); // dodawanie nowych tasków do listy

  function handleChange(event) {
    setTextTask(event.target.value);
  }

  function addTask() {
    if (textTask.trim() === "") return; // walidcja, trim ucina biale znaki z przodu i z tylu, potem sprawdzamy czy pole jest puste
    setTasks([...tasks, textTask]);
    setTextTask(""); // wyczyszczenie inputa
  }

  return (
    <>
      <label>Task: </label>
      <input type="text" value={textTask} onChange={handleChange} />
      <button onClick={addTask}>Dodaj</button>

      <ol>
        {tasks.map(
          (
            task,
            index // modyfikacja elementow tablicy do li
          ) => (
            <li key={index}>{task}</li>
          )
        )}
      </ol>
    </>
  );
}

export default App;
