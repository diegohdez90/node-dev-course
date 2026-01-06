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
	/**
	 * @type {{title: string, body: string}[]}
	 */
	const notes = getNotes();
	const duplicateNote = notes.find(n => n.title === note.title);
	if (duplicateNote) {
		console.log('Note title taken!');
		return notes;
	}
	notes.push(note);
	saveNote(notes);
	return notes;
}

/**
 * @param {Array<Object>} notes
 */
function saveNote(notes) {
	fs.writeFileSync('notes.json', JSON.stringify(notes));
}

module.exports = {
	getNotes,
	addNote
};


