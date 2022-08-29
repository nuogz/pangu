let E = process.env.NENV_NODE_FUNC ?? [];

if(typeof E == 'string') { E = E.split(';'); }
E = process.E = E.filter(env => env.trim()).reduce((e, env) => {
	let [target, params = ''] = env.split(':');
	params = params.split(',').filter(env => env.trim());

	e[target] = params;

	return e;
}, {});


const isExportAll = '*' in E;



export const dirPackage = (isExportAll || 'dir' in E) ? (await import('./lib/dir.js')).dirPackage : undefined;



export const PKG = (isExportAll || 'pkg' in E || 'package' in E) ? (await import('./lib/package.js')).default : undefined;



export const O = (isExportAll || 'cmd' in E || 'command' in E) ? (await import('./lib/command.js')).default : undefined;



export const C = (isExportAll || 'cfg' in E || 'conf' in E || 'config' in E) ? (await import('./lib/config.js')).default : undefined;



export const G = (isExportAll || 'log' in E || 'logger' in E) ? (await import('./lib/log.js')).default : undefined;



export const Moment = (isExportAll || 'moment' in E) ? (await import('./lib/moment.js')).default : undefined;


export const Poseidon = (isExportAll || 'Poseidon' in E) ? (await import('@nuogz/poseidon')).default : undefined;
export const Hades = (isExportAll || 'Hades' in E) ? (await import('@nuogz/hades')).default : undefined;


export const copyJSON = (isExportAll || 'tool' in E) ? (await import('./lib/tool.js')).copyJSON : undefined;
export const readPackage = (isExportAll || 'tool' in E) ? (await import('./lib/package.js')).readPackage : undefined;



if(isExportAll || 'proc' in E || 'process' in E) { await import('./lib/process.js'); }
