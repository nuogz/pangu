import { dirname } from 'path';
import { fileURLToPath } from 'url';


/**
 * @param {string|URL} url
 * @returns {string}
 */
export const dirFromFileURL = url => dirname(fileURLToPath(url));


export const dirPackage = dirFromFileURL(process.env.NENV_PKG_PATH);
