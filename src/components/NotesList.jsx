import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NotesList() {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="w-full p-10">
      <p className="text-slate-200 text-xl mb-6">Bienvenue sur Notes101.</p>
      <ul className="grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {notes.list &&
          notes.list.map((note) => (
            <li
              key={note.id}
              className="rounded bg-slate-100 hover:bg-slate-50 cursor-pointer"
            >
              <Link
                to={`/note/${note.id}`}
                className="block p-4 w-full h-full rounded"
              >
                <p className="text-lg font-semibold">{note.title}</p>
                <p className="text-gray-700">{note.subtitle} </p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
