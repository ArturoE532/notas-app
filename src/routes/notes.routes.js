const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm,
    createNoteForm,
    renderNotes,
    renderEditNotes,
    updateNotes,
    deleteNotes 
} = require('../controllers/notes.controllers');

// Nueva nota
router.get('/notes/add', renderNoteForm);

router.post('/notes/newnote', createNoteForm);

//Obteber todas las notas
router.get('/notes', renderNotes);

// Edotar notas
router.get('/notes/edit/:id', renderEditNotes);

router.put('/notes/edit/:id', updateNotes);

// eliminar notas
router.delete('/notes/delete/:id', deleteNotes);

module.exports = router;