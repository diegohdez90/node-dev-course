const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { getNotes, addNote } = require('./notes');

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
		handler: function (argv) {
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
		handler: function () {
			console.log('Removing item...');
		}
	})
	.command({
		command: 'list',
		describe: 'List all items',
		handler: function () {
			console.log('Listing items...');
			/**
			 * @type {Object[]}
			 */
			const notes = getNotes();
			console.log(notes);
		}
	})
	.command({
		command: 'read',
		describe: 'Read an item',
		handler: function () {
			console.log('Reading item...');
		}
	})
	.demandCommand(1, 'You need to specify at least one command')
	.help()
	.wrap(72)
	.parse();


module.exports = yargs;
