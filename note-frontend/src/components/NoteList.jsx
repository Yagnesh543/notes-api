import React from 'react'
import "./css/notelist.css";
import api from '../services/api';

const NoteList = ({ notes, onSelectNotes }) => {
    const categories = ["Work", "Personal", "Other"];

    return (
        <>
            <div id="listPage" className="page active">
                <div className="card">
                    <h2 >All Notes</h2>

                    {notes.length === 0 ? (
                        <div className="empty-state">
                            No notes yet. Create your first note!
                        </div>
                    ) : (
                        categories.map((cat) => {
                            const group = notes.filter((n) => n.category === cat);
                            if (group.length === 0) return null;
                            return (
                                <div key={cat} className="category-section">
                                    <div className="category-header">{cat}</div>
                                    <div className="notes-grid">
                                        {group.map((note) => (
                                            <div key={note._id} className='note-card' onClick={() => onSelectNotes(note)}>
                                                <div className="note-title">{note.title}</div>
                                                <div className="note-preview">{note.content.slice(0, 20)}...</div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            )
                        })
                    )}
                    <div id="notesList"></div>
                </div>
            </div>

        </>
    )
}

export default NoteList