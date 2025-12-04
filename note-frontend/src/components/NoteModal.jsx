import React from 'react'
import "./css/modal.css"

const NoteModal = ({ note, close }) => {
    if (!note) return null;
    return (

        <div id="noteModal" className="modal active" onClick={close}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title" id="modalTitle">{note.title}</h3>
                    <button className="close-btn" onClick={close}>&times;</button>
                </div>
                <div className="modal-category" id="modalCategory">{note.category}</div>
                <div className="modal-content-text" id="modalContent">{note.content}</div>
            </div>
        </div>
    )
}

export default NoteModal