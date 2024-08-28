import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayedNote from './components/DisplayedNote';
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
      <BrowserRouter>
        <Sidebar />
        <SideNotes />

        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route path="/note/:id" element={<DisplayedNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
