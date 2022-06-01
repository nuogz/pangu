import { resolve, parse, sep, basename, posix } from 'path';
import { pathToFileURL } from 'url';

import ReaddirRecur from 'fs-readdir-recursive';

import { copyJSON } from '@nuogz/pangu';


export default async function readRoute(pathAPP) {
	const faces = [];
	const folds = [];

	const filesAPP = ReaddirRecur(pathAPP);


	const filesAPI = filesAPP.filter(f => f.endsWith('.api.js'));
	for(const fileAPI of filesAPI) {
		const pathAPI = resolve(pathAPP, fileAPI);
		const infoAPI = parse(fileAPI);

		const api = await import(pathToFileURL(pathAPI));

		faces.push({
			route: posix.join(
				...infoAPI.dir.split(sep),
				basename(infoAPI.base, '.api.js')
			),
			method: api.method ?? 'get',
			handle: api.handle,
			upload: api.upload ?? false,
			option: Object.assign({ parseResult: true }, copyJSON(api)),
		});
	}


	const filesMAP = filesAPP.filter(p => p.endsWith('.map.js'));
	for(const fileMAP of filesMAP) {
		const pathMAP = resolve(pathAPP, fileMAP);
		const dirMAP = parse(pathMAP).dir;

		const maps = (await import(pathToFileURL(pathMAP))).default;

		maps.forEach(({ route, path }) =>
			folds.push({
				route,
				path: resolve(dirMAP, path)
			})
		);
	}

	return { faces, folds };
}
