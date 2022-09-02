import { resolve } from 'path';

import Poseidon from '@nuogz/poseidon';

import { dirPackage } from './dir.js';
import O from './command.js';



const dirConfig = O['config-dir'] ?? resolve(dirPackage, 'config');


const E = process.E ?? {};
const params = [].concat(...E.cfg.filter(p => p));

const C = new Poseidon(dirConfig, params.join(','));



export default C;
