const fs = require('fs');
const { default: chalk } = require('chalk');

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
	const notes = getNotes();
	const duplicateNote = notes.find((/** @type {{ title: string; }} */ n) => n.title === note.title);
	if (duplicateNote) {
		console.log('Note title taken!');
		return notes;
	}
	notes.push(note);
	saveNote(notes);
	return notes;
}

const removeNote = (/** @type {string} */ title) => {
	const notes = getNotes();
	const filteredNotes = notes.filter((/** @type {{ title: string; }} */ n) => n.title !== title);
	if (filteredNotes.length !== notes.length) {
		saveNote(filteredNotes);
		console.log(chalk.green.inverse('Note removed!:', title));
		return filteredNotes;
	} else {
		console.log(chalk.red.inverse('No note found!'));
		return notes;
	}
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


