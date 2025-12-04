const mongoose = require("mongoose");

const noteSchema  = mongoose.Schema({
    title : String,
    content : String,
    category : {
        type : String,
        enum : ["Work", "Personal", "Other"]
    }
});

const noteModel = mongoose.model("Note" , noteSchema);

module.exports = noteModel;