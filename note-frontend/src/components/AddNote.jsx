import React, { useState } from 'react'
import api from '../services/api';
import "./css/addnote.css"

const AddNote = ({ onAdd }) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
        category: ""
    });

    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await onAdd(note);

        setSuccess(true);

        // reset form
        setNote({ title: "", content: "", category: "" });

        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    }

    return (
        <div id="addPage" className="page active">
            <div className="card">
                <h2>Create New Note</h2>

                {success && (
                    <div className="success-message">Note saved successfully!</div>
                )}

                {/* FIX: added onSubmit */}
                <form id="noteForm" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={note.title}
                            onChange={(e) => setNote({ ...note, title: e.target.value })}
                            required
                            placeholder="Enter note title"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>

                        {/* FIX: added value */}
                        <select
                            id="category"
                            value={note.category}
                            required
                            onChange={(e) => setNote({ ...note, category: e.target.value })}
                        >
                            <option value="">Select a category</option>
                            <option value="Work">Work</option>
                            <option value="Personal">Personal</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            value={note.content}
                            onChange={(e) => setNote({ ...note, content: e.target.value })}
                            required
                            placeholder="Write your note here..."
                        />
                    </div>

                    <button type="submit" className="btn btn-primary save-note">
                        Save Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
