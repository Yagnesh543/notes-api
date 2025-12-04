const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");
// import { createNote } from "../controllers/notesController";


router.post("/", notesController.createNote);
router.get("/" , notesController.getNote);
router.get("/:id",notesController.getNoteById);

module.exports = router;
