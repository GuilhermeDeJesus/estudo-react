import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

export default function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] mx-auto space-y-4">
          <div className="flex justify-center relative md-6">
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-0 bottom-0 text-slate-500"
            >
              <ChevronLeftIcon />
            </button>

            <Title>Detalhes da Tarefa</Title>
          </div>

          <div className="bg-slate-400 p-4 rounded-md">
            <h2 className="text-xl text-white font-bold">{title}</h2>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
