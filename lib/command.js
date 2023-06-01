import { Command } from 'commander/esm.mjs';

import PKG from './package.js';


/** @type {import('commander').Command} */
export const CMD = new Command().allowUnknownOption();


CMD.version(PKG.version);

CMD.option('-cd, --config-dir <dirConfig>', 'config DIR');

CMD.option('--log-dir <dirLog>', 'log DIR');
CMD.option('--log-locale <localeName>', 'log locale');
CMD.option('--log-name <nameLog>', 'log name');
CMD.option('--log-level <levelLog>', 'log level');


const resultCommand = {};
if(typeof process.preloadCommand == 'function') { await process.preloadCommand(CMD, resultCommand); }


CMD.parse(process.argv);


const O = CMD.opts();

O.CMD = CMD;

for(const key of Object.keys(resultCommand)) { O[key] = resultCommand[key]; }


export default O;
