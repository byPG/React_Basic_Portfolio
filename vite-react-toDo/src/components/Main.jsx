import { useState } from "react";

export default function Main() {
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

  function handleDelete(index) {
    setTasks(tasks.filter((_, i) => i !== index)); // odfiltruj z tablicy element prawdziwy dla warunku !==index -> przechodzi po tablicy tasks i porównuje z index, ktory aktualnie jest w li
  }

  return (
    <main>
      <div className="flex justify-between ">
        <input
          type="text"
          value={textTask}
          onChange={handleChange}
          placeholder="Write your task here..."
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Dodaj
        </button>
      </div>

      <ol>
        {tasks.map(
          (
            task,
            index // modyfikacja elementow tablicy do li
          ) => (
            <li key={index}>
              {task}
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded">
                Usuń
              </button>
            </li>
          )
        )}
      </ol>
    </main>
  );
}
