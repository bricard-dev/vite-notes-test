import { useSelector } from 'react-redux';

export default function NotesList() {
  const notes = useSelector((state) => state.notes);

  return <div>NotesList</div>;
}
