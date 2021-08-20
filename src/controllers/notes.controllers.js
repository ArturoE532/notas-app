const notasCtrl = {};

notasCtrl.renderNoteForm = (req, res) => {
    res.render('notes/newnote');
};

notasCtrl.createNoteForm = (req, res) => { 
    res.send('new add')
};

notasCtrl.renderNotes = (req, res) => { 
    res.send('render notes')
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