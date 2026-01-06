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

const addNote = (/** @type {Object} */ note) => {
	/**
	 * @type {Object[]}
	 */
	const notes = getNotes();
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


