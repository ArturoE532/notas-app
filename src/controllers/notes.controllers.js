const notasCtrl = {};

const Note = require('../models/Note');

notasCtrl.renderNoteForm = (req, res) => {
    res.render('notes/newnote');
};

notasCtrl.createNoteForm = async (req, res) => {
    const {title, description} = req.body; 
    const newNote = new Note({title , description});
    await newNote.save();
    res.send('new add')
};

notasCtrl.renderNotes = async (req, res) => { 
    const notes = await Note.find();
    res.render('notes/allnotes', {notes});
};

notasCtrl.renderEditNotes = (req, res) => { 
    res.send('render edit notes')
};

notasCtrl.updateNotes = (req, res) => { 
    res.send('render update notes')
};

notasCtrl.deleteNotes = (req, res) => { 
    res.send('render delete notes')
};

module.exports = notasCtrl;