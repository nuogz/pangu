import { parse, resolve } from 'path';

import { copyJSON } from '@nuogz/utility';
import Hades from '@nuogz/hades';



export default function init(launcher, environment, $pangu) {
	const { dir: dirWorking, package: PKG, config } = environment;

	const name = launcher.params.name?.[0] || launcher.params.default?.[0] || process.env.NENV_HADES_NAME || PKG.name;
	const level = launcher.params.level?.[0] || launcher.params.default?.[1] || config.log?.level;

	const dirLog = resolve(
		launcher.params.dir?.[0]
			?.replace(/(?<!\\)<entry(?<!\\)>/g, parse(process.argv[1]).dir).replace(/\\([<>])/g, '$1')
			?.replace(/(?<!\\)<cwd(?<!\\)>/g, process.cwd()).replace(/\\([<>])/g, '$1') ||
		process.env.NENV_HADES_DIR ||
		resolve(dirWorking, 'log')
	);

	const option = copyJSON(config.log ?? {});


	const G = new Hades(name, level, dirLog, option);


	return G;
}
