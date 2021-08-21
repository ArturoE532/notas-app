const notasCtrl = {};

const Note = require('../models/Note');

notasCtrl.renderNoteForm = (req, res) => {
    res.render('notes/newnote');
};

notasCtrl.createNoteForm = async (req, res) => {
    const {title, description} = req.body; 
    const newNote = new Note({title , description});
    await newNote.save();
    req.flash('success_msg', 'Nota creada correctamente');
    res.redirect('/notes')
};

notasCtrl.renderNotes = async (req, res) => { 
    const notes = await Note.find();
    res.render('notes/allnotes', {notes});
};

notasCtrl.renderEditNotes = async (req, res) => { 
    const note = await Note.findById(req.params.id)
    res.render('notes/editnote', {note});
};

notasCtrl.updateNotes = async (req, res) => { 
    const { title,description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Nota actualizada correctamente');
    res.redirect('/notes')
};

notasCtrl.deleteNotes = async (req, res) => { 
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Nota eliminada correctamente');
    res.redirect('/notes')
};

module.exports = notasCtrl;