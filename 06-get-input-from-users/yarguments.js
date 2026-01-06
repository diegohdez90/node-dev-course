const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
	.command({
		command: 'add',
		describe: 'Add a new item',
		handler: function (argv) {
			console.log('Adding item...');
			console.log(`Value to add: ${argv.value}`);
			if (!argv.title) {
				console.log('Error: Title is required');
				process.exit(1);
			}
			console.log(`Title: ${argv.title}`);
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
	.option('title', {
		describe: 'Title of the item',
		type: 'string',
		demandOption: false
	})
	.help()
	.wrap(72)
	.parse();


module.exports = yargs;
