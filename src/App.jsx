import { useDispatch, useSelector } from 'react-redux';
import NotesList from './components/NotesList';
import { getNotesFromAPI } from './features/notes';

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  console.log(notes);

  if (!notes.list) {
    dispatch(getNotesFromAPI());
  }

  return (
    <div className="min-h-screen flex bg-slate-800">
      <NotesList />
    </div>
  );
}

export default App;
