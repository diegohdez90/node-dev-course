const fs = require('fs');

const getNotes = () => {
	try {
		const raw = fs.readFileSync('notes.json', 'utf-8');
		if (raw) {
			return JSON.parse(raw);
		}
		return [];
	} catch (error) {
		return [];
	}
}

const addNote = (/** @type {{title: string, body: string}} */ note) => {
	const { duplicateNote, notes } = findNotesByTitle(note.title);
	if (duplicateNote) {
		console.log('Note title taken!');
		return notes;
	}
	notes.push(note);
	saveNote(notes);
	return notes;
}

const removeNote = (/** @type {string} */ title) => {
	const { duplicateNote, notes } = findNotesByTitle( title );
	if (duplicateNote) {
		const filteredNotes = notes.filter((/** @type {{ title: string; }} */ n) => n.title !== title);
		saveNote(filteredNotes);
		console.log('Note removed!: ', title);
		saveNote(filteredNotes);
		return filteredNotes;
	} else {
		console.log('No note found!');
		return notes;
	}
}

/**
 * @param {string} title
 */
function findNotesByTitle(title) {
	const notes = getNotes();
	const duplicateNote = notes.find((/** @type {{ title: string; }} */ n) => n.title === title);
	return { duplicateNote, notes };
}

/**
 * @param {Array<Object>} notes
 */
function saveNote(notes) {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = {
	getNotes,
	addNote,
	removeNote
};


