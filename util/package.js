import { parse, resolve } from 'path';

import { readPackage } from '@nuogz/utility';



export default function init(launcher, environment, $pangu) {
	const dirPackage = resolve(
		(launcher.params.dir?.[0] || launcher.params.default?.[0])

			?.replace(/(?<!\\)<entry(?<!\\)>/g, parse(process.argv[1]).dir).replace(/\\([<>])/g, '$1')
			?.replace(/(?<!\\)<cwd(?<!\\)>/g, process.cwd()).replace(/\\([<>])/g, '$1') ||

		environment.dir
	);


	const pkg = readPackage(resolve(dirPackage, 'package.json'));


	environment.package = pkg;


	return pkg;
}
