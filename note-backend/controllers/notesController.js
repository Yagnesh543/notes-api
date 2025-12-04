const noteModel = require("../models/note");

const createNote = async (req, res) => {
    const note = await noteModel.create(req.body);
    res.json(note);
};

const getNote = async (req,res)=>{
    const allNotes = await noteModel.find();
    res.json(allNotes);
};

const getNoteById  = async (req,res)=>{
    const note = await noteModel.findById(req.params.id);
    res.json(note);
};



module.exports = {
    createNote,
    getNote,
    getNoteById
}
