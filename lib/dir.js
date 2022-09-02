import { dirname } from 'path';
import { fileURLToPath } from 'url';



export const dirFromFileURL = url => dirname(fileURLToPath(url));


export const dirPackage = dirFromFileURL(process.env.NENV_PKG_PATH);
