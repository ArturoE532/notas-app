const notasCtrl = {};

const Note = require('../models/Note');

notasCtrl.renderNoteForm = (req, res) => {
    res.render('notes/newnote');
};

notasCtrl.createNoteForm = async (req, res) => {
    const {title, description} = req.body; 
    const newNote = new Note({title , description});
    newNote.user = req.user.id;
    await newNote.save();
    req.flash('success_msg', 'Nota creada correctamente');
    res.redirect('/notes')
};

notasCtrl.renderNotes = async (req, res) => { 
    const notes = await Note.find({user: req.user.id}).sort({createdAt: 'desc'});
    res.render('notes/allnotes', {notes}); 
};

notasCtrl.renderEditNotes = async (req, res) => { 
    const note = await Note.findById(req.params.id);
    if (note.user != req.user.id) {
    req.flash('error_msg', 'No estas autorizado');
    return res.redirect('/notes');
}
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