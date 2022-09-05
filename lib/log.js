import { resolve } from 'path';

import { copyJSON } from '@nuogz/utility';
import Hades from '@nuogz/hades';

import { dirPackage } from './dir.js';
import PKG from './package.js';
import O from './command.js';
import C from './config.js';



const env = process.env;

const name = O.logName ?? C.log?.name ?? env.NENV_HADES_NAME ?? PKG.name;
const level = O.logLevel ?? C.log?.level ?? env.NENV_HADES_LEVEL;
const dirLog = O.logDir ?? env.NENV_HADES_DIR ?? resolve(dirPackage, 'log');


const option = copyJSON(C.log ?? {});


const G = new Hades(name, level, dirLog, option);



export default G;
