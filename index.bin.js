import { Command } from 'commander/esm.mjs';

import { dirPackage } from './lib/dir.js';
import { readPackage } from './lib/package.js';

import init from './src/init.js';



const PKG = readPackage(dirPackage);


const CMD = new Command();

CMD.version(PKG.version);


CMD.command('init')
	.option('-f, --force', 'Force overwrite file')
	.argument('<types...>')
	.action((types, options) => init(types, options.force));


CMD.parse(process.argv);
