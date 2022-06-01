let E = process.env.NENV_NODE_FUNC ?? [];

if(typeof E == 'string') { E = E.split(';'); }
E = E.filter(env => env.trim()).reduce((e, env) => {
	let [target, params = ''] = env.split(':');
	params = params.split(',').filter(env => env.trim());

	e[target] = params;

	return e;
}, {});



export const dirPackage = ('*' in E || 'dir' in E) ? (await import('./lib/dir.js')).dirPackage : undefined;



export const PKG = ('*' in E || 'pkg' in E || 'package' in E) ? (await import('./lib/package.js')).default : undefined;



export const O = ('*' in E || 'cmd' in E || 'command' in E) ? (await import('./lib/command.js')).default : undefined;



export const C = ('*' in E || 'cfg' in E || 'conf' in E || 'config' in E) ? (await import('./lib/config.js')).default : undefined;



export const G = ('*' in E || 'log' in E || 'logger' in E) ? (await import('./lib/log.js')).default : undefined;



export const Moment = ('*' in E || 'moment' in E) ? (await import('./lib/moment.js')).default : undefined;



export const copyJSON = ('*' in E || 'tool' in E) ? (await import('./lib/tool.js')).copyJSON : undefined;
export const readPackage = ('*' in E || 'tool' in E) ? (await import('./lib/package.js')).readPackage : undefined;



if('*' in E || 'proc' in E || 'process' in E) { await import('./lib/process.js'); }
