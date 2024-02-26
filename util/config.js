import { parse, resolve } from 'path';

import Poseidon from '@nuogz/poseidon';



export default function init(launcher, environment, $pangu) {
	const dirConfig = resolve(
		launcher.params.dir?.[0]
			?.replace(/(?<!\\)<entry(?<!\\)>/g, parse(process.argv[1]).dir).replace(/\\([<>])/g, '$1')
			?.replace(/(?<!\\)<cwd(?<!\\)>/g, process.cwd()).replace(/\\([<>])/g, '$1') ||
		resolve(environment.dir, 'config')
	);


	const config = new Poseidon(dirConfig, launcher.params.default?.join(','));


	environment.config = config;


	return config;
}
