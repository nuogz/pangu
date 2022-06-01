import { Command } from 'commander/esm.mjs';

import PKG from './package.js';



export const CMD = new Command();

CMD.version(PKG.version);

CMD.option('-cd, --config-dir <dirConfig>', 'config DIR');

CMD.option('-ld, --log-dir <dirLog>', 'log DIR');
CMD.option('-llc, --log-locale <localeName>', 'log DIR');
CMD.option('-ln, --log-name <nameLog>', 'log name');
CMD.option('-ll, --log-level <levelLog>', 'log level');

CMD.parse(process.argv);


const O = CMD.opts();

O.CMD = CMD;



export default O;
