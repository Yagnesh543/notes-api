import AddNote from './components/AddNote'
import "./App.css";
import { useState ,useEffect} from 'react';
import NoteList from './components/NoteList';
import NoteModal from './components/NoteModal';
import api from './services/api';

function App() {
  const [page, setPage] = useState("add");
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

   const addNote = async (note) => {
    const res = await api.post("/notes", note);
    setNotes([...notes, res.data]);
    // setPage("list");
  };

  const fetchNotes = async () => {
    const res = await api.get("/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);


  return (

    <div className="container">
      <div className="header">
        <h1>📝 My Notes</h1>
      </div>

      <div className="nav-buttons">
        <button className="btn btn-primary" onClick={() => setPage("add")} >+ Add Note</button>
        <button className="btn btn-secondary" onClick={() => setPage("list")}>View All Notes</button>
      </div>

      {page === "add" && <AddNote onAdd={addNote}/>}
      {page === "list" && (
        <NoteList notes={notes} onSelectNotes={(note) => setSelectedNote(note)} />
      )}

      <NoteModal note={selectedNote} close={() => setSelectedNote(null)} />
    </div>
  )
}

export default App
