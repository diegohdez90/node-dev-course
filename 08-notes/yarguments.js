const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { default: chalk } = require('chalk');
const {
  getNotes,
	addNote,
	removeNote,
  getNote
} = require('./notes');

yargs(hideBin(process.argv))
	.command({
		command: 'add',
		describe: 'Add a new item',
		builder: {
			title: {
				describe: 'Title of the item',
				type: 'string',
				demandOption: true,
			},
			body: {
				describe: 'Body of the item',
				type: 'string',
				demandOption: true,
			},
		},
		handler: (argv) => {
			console.log('Adding item...');
			console.log(`Value to add: ${argv.value}`);
			console.log(`Title: ${argv.title}`);
			console.log(`Body: ${argv.body}`);
			addNote({ title: argv.title, body: argv.body });
		}
	})
	.command({
		command: 'remove',
		describe: 'Remove an item',
		builder: {
			title: {
				describe: 'Title of the item to remove',
				type: 'string',
				demandOption: true,
			},
		},
		handler: (argv) => {
			console.log('Removing item...');
			const title = argv.title;
			const notes = removeNote(title);
			console.log(notes);
		}
	})
	.command({
		command: 'list',
		describe: 'List all items',
		handler: () => {
			console.log(chalk.bgBlue('Listing items...'));
			/**
			 * @type {Object[]}
			 */
			const notes = getNotes();
      for (const note of notes) {
        console.log('- ', note);
      }
		}
	})
	.command({
		command: 'read',
		describe: 'Read an item',
    builder: {
      title: {
        describe: 'Title of the item to read',
      }
    },
		handler: (argv) => {
			const title = argv.title;
      const note = getNote(title);
      if (note) {
        console.log(chalk.bgGreen('Note found:'));
        console.log('Title:', note.title);
        console.log('Body:', note.body);
      } else {
        console.log(chalk.bgRed('Note not found'));
      }
		}
	})
	.demandCommand(1, 'You need to specify at least one command')
	.help()
	.wrap(72)
	.parse();


module.exports = yargs;
