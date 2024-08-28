import { useDispatch, useSelector } from 'react-redux';
import NotesList from './components/NotesList';
import Sidebar from './components/Sidebar';
import SideNotes from './components/SideNotes';
import { getNotesFromAPI } from './features/notes';

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  if (!notes.list) {
    dispatch(getNotesFromAPI());
  }

  return (
    <div className="min-h-screen flex bg-slate-800">
      <Sidebar />
      <SideNotes />
      <NotesList />
    </div>
  );
}

export default App;
