import { useParams, Link } from "react-router-dom";

export default function QuestPlayerPage() {
  const { id } = useParams();

  return (
    <div className="max-w-2xl mx-auto">
      <Link to="/" className="text-indigo-600 hover:text-indigo-800 mb-4 font-medium inline-block">
        ...
      </Link>
      <div className="">PHOTO</div>
      <div className="p-8">
        <h1>Квест №{id}</h1>
        <div>
            <p>
                REPLACE I- *laughter*
            </p>
        </div>
        <div className="flex gap-3">
            <input type="text" className="flex-1 border-gray-300 rounder-lg px-4 py-3" placeholder="Відповідь..."/>
        </div>
      </div>
    </div>
  );
}
