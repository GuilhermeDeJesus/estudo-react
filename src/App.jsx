import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Função para buscar tarefas
  const fetchTasks = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await response.json();
    console.log(data);
    // setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Função para atualizar a tarefa
  // const onTaskClick = async (taskId) => {
  //   const response = await fetch("http://localhost:5174/file.php", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id: taskId }),
  //   });

  //   const updatedTasks = await response.json();
  //   setTasks(updatedTasks);
  // };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteItem(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function addTaskForm(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
          <Title>Gerenciador de Tarefas</Title>
          <AddTask addTaskForm={addTaskForm} />
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteItem={onDeleteItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
