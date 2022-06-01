import { resolve } from 'path';

import Hades from '@nuogz/hades';

import { dirPackage } from './dir.js';
import PKG from './package.js';
import O from './command.js';
import C from './config.js';
import { copyJSON } from './tool.js';



const name = O.logName ?? C.log?.name ?? PKG.name;
const level = O.logLevel ?? C.log?.level ?? 'info';
const dirLog = O.logDir ?? resolve(dirPackage, 'log');


const option = copyJSON(C.log ?? {});


const G = new Hades(name, level, dirLog, option);



export default G;
