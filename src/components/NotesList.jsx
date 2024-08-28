import { useSelector } from 'react-redux';

export default function NotesList() {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="w-full p-10">
      <p className="text-slate-200 text-xl mb-6">Bienvenue sur Notes101.</p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {notes.list &&
          notes.list.map((note) => (
            <div
              key={note.id}
              className="p-4 rounded bg-slate-100 hover:bg-slate-50 cursor-pointer"
            >
              <p className="text-lg font-semibold">{note.title}</p>
              <p className="text-gray-700">{note.subtitle} </p>
            </div>
          ))}
      </div>
    </div>
  );
}
