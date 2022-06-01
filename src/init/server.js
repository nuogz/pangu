/* eslint-disable no-console */

import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

import { dirFromFileURL } from '../../lib/dir.js';
import { readPackage } from '../../lib/package.js';



const dirsEnsure = [
	'.vscode',
	'config',
	'lib',
	'src',
];

const filesCopy = [
	'LICENSE',
	'.vscode/launch.json',
	'.vscode/settings.json',
	'.eslintrc.cjs',
	'.gitignore',
	'jsconfig.json|jsconfig.preset.json',

	'index.env.js',
	'index.js|index.server.js',

	'config/config.server.json',
	'lib/route.js',
	'src/version.api.js',
];


const dependencies = {
	'@nuogz/desire': '^4',
	'@nuogz/pangu': '^1',
	'fs-readdir-recursive': '^1',
};

const devDependencies = {
	'eslint': '^8',
};


export default function initNode() {
	const dirCWD = process.cwd();
	const dirPackage = resolve(dirFromFileURL(import.meta.url), '..', '..');
	const dirPreset = resolve(dirPackage, 'preset');


	dirsEnsure.forEach(dir => {
		const pathDir = resolve(dirCWD, dir);

		if(!existsSync(pathDir)) {
			mkdirSync(pathDir);
		}

		console.log(dir, '✔');
	});


	filesCopy.forEach(file => {
		const [fileDest, fileSource = fileDest] = file.split('|');
		const pathFileDest = resolve(dirCWD, fileDest);

		if(!existsSync(pathFileDest)) {
			copyFileSync(resolve(dirPreset, fileSource), pathFileDest);
		}

		console.log(file, '✔');
	});


	const filePackage = resolve(dirCWD, 'package.json');
	const packageExist = readPackage(filePackage);
	const packagePreset = readPackage(resolve(dirPreset, 'package.json'));
	const packageNow = Object.assign(packagePreset, packageExist);

	packageNow.dependencies = Object.assign(dependencies, packageNow.dependencies ?? {});
	packageNow.devDependencies = Object.assign(devDependencies, packageNow.devDependencies ?? {});


	writeFileSync(filePackage, JSON.stringify(packageNow, null, '\t'));

	console.log('package.json', '✔');


	console.log('\nRUN following commands:');
	console.log(`npm install`);
	console.log(`npm update`);
}
