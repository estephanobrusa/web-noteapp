const router=require('express').Router();
const ctrl=require('../controllers/notes.controller');
const isAuthenticated=require('../helpers/auth')



// New Note
router.get("/notes/add", isAuthenticated,  ctrl.renderNoteForm);

router.post("/notes/new-note", isAuthenticated, ctrl.createNewNote);

// Get All Notes
router.get("/notes/all-notes", isAuthenticated, ctrl.renderNotes);

// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, ctrl.renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, ctrl.updateNote);

// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, ctrl.deleteNote);

module.exports=router;
