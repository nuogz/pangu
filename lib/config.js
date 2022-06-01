import { resolve } from 'path';

import Poseidon from '@nuogz/poseidon';

import { dirPackage } from './dir.js';
import O from './command.js';



const dirConfig = O['config-dir'] ?? resolve(dirPackage, 'config');


const C = new Poseidon(dirConfig, '');



export default C;
