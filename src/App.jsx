import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState( JSON.parse(localStorage.getItem("tasks")) || [] );

  useEffect (() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplited: !task.isComplited };
      }
      
      return task;
    })

    setTasks(newTasks);
  }

  function onTrashClick(taskId) {
    const newTask = tasks.filter(task => task.id !== taskId)
    
    setTasks(newTask);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: tasks.map((task) => task.id).reduce((a, b) => Math.max(a, b), 0) + 1,
      title,
      description,
      isComplited: false,
    };

    setTasks([...tasks, newTask]);

  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTrashClick={onTrashClick} />
      </div>
    </div>
  );
}

export default App;