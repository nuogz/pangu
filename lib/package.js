import { resolve } from 'path';

import { readPackage } from '@nuogz/utility';

import { dirPackage } from './dir.js';



const PKG = readPackage(resolve(dirPackage, 'package.json'));


export default PKG;
