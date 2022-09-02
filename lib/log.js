import { resolve } from 'path';

import { copyJSON } from '@nuogz/utility';
import Hades from '@nuogz/hades';

import { dirPackage } from './dir.js';
import PKG from './package.js';
import O from './command.js';
import C from './config.js';



const name = O.logName ?? C.log?.name ?? PKG.name ?? 'log';
const level = O.logLevel ?? C.log?.level ?? 'info';
const dirLog = O.logDir ?? resolve(dirPackage, 'log');


const option = copyJSON(C.log ?? {});


const G = new Hades(name, level, dirLog, option);



export default G;
