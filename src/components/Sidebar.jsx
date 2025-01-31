import { Link } from 'react-router-dom';
import edit from '../assets/edit.svg';
import folder from '../assets/folder.svg';

export default function Sidebar() {
  return (
    <aside className="shrink-0 bg-slate-800 w-[100px] flex flex-col items-center pt-10">
      <div className="flex justify-center mb-12">
        <div className="w-4 h-4 rounded-full bg-red-500 mx-1"></div>
        <div className="w-4 h-4 rounded-full bg-yellow-500 mx-1"></div>
        <div className="w-4 h-4 rounded-full bg-green-500 mx-1"></div>
      </div>
      <Link to="/">
        <img
          className="h-10 w-10 mb-10"
          src={folder}
          alt="Voir toutes les notes"
        />
      </Link>
      <Link to="/editer">
        <img className="h-10 w-10 mb-10" src={edit} alt="Écrire une notes" />
      </Link>
    </aside>
  );
}
