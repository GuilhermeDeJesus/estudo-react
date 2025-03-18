import { PhilippinePeso } from "lucide-react";
import { useState } from "react";
import Input from "./Input";

function AddTask({ addTaskForm }) {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow mb-6">
      <Input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha os campos corretamente seu viado");
          } else {
            addTaskForm(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        className="bg-slate-500! text-white! px-4 py-2 rounded-md w-full"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
