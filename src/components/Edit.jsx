import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Edit() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const { id } = useParams();
  const actualNote = notes.list?.find((note) => note.id === id);

  const [inputsStates, setInputsStates] = useState({
    title: '',
    subtitle: '',
    bodyText: '',
  });
  const [showValidation, setShowValidation] = useState({
    title: false,
    subtitle: false,
    bodyText: false,
  });

  return (
    <div className="w-full p-10">
      <p className="text-slate-100 text-xl mb-4">Ajouter une note</p>
      <form>
        <label htmlFor="title" className="mb-2 block text-slate-100">
          Le titre
        </label>
        <input
          onChange={(e) =>
            setInputsStates({ ...inputsStates, title: e.target.value })
          }
          type="text"
          value={inputsStates.title}
          className="p-2 text-md block w-full rounded bg-slate-200"
          id="title"
          spellCheck="false"
        />
        {showValidation.title && (
          <p className="mb-2 text-red-400">Veuillez renseigner un titre.</p>
        )}
        <label htmlFor="subtitle" className="mb-2 mt-4 block text-slate-100">
          Le sous-titre
        </label>
        <input
          onChange={(e) =>
            setInputsStates({ ...inputsStates, subtitle: e.target.value })
          }
          type="text"
          value={inputsStates.subtitle}
          className="p-2 text-md block w-full rounded bg-slate-200"
          id="subtitle"
          spellCheck="false"
        />
        {showValidation.subtitle && (
          <p className="mb-2 text-red-400">
            Veuillez renseigner un sous-titre.
          </p>
        )}
        <label htmlFor="bodyText" className="mb-2 mt-4 block text-slate-100">
          Le contenu de la note
        </label>
        <textarea
          id="bodyText"
          value={inputsStates.bodyText}
          onChange={(e) =>
            setInputsStates({ ...inputsStates, bodyText: e.target.value })
          }
          className="w-full min-h-300 p-2 rounded bg-slate-200"
          spellCheck="false"
        />
        {showValidation.bodyText && (
          <p className="mb-2 text-red-400">Veuillez écrire du contenu.</p>
        )}
        <button className="mt-4 px-3 py-1 bg-slate-100 rounded">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
