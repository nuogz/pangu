import { dirname } from 'path';
import { fileURLToPath } from 'url';


/**
 * @param {string|URL} url
 * @returns {string}
 */
export const dirFromFileURL = url => {
	try { return dirname(fileURLToPath(url)); }
	catch { return void 0; }
};


export const dirPackage = dirFromFileURL(process.env.NENV_PKG_PATH) ?? process.cwd();
