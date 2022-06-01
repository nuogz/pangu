/* eslint-disable no-console */

import { Command } from 'commander/esm.mjs';

import { dirFromFileURL } from './lib/dir.js';
import { readPackage } from './lib/package.js';

import initNode from './src/init/node.js';
import initServer from './src/init/server.js';



const dirPackage = dirFromFileURL(import.meta.url);
const PKG = readPackage(dirPackage);


const CMD = new Command();

CMD.version(PKG.version);

const cmdInit = CMD.command('init');

cmdInit.command('node').action(initNode);
cmdInit.command('server').action(initServer);

CMD.parse(process.argv);
