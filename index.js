const slotsFunction = {
	dir: 'dir',
	pkg: 'package',
	package: 'package',
	cmd: 'command',
	command: 'command',
	cfg: 'config',
	conf: 'config',
	config: 'config',
	log: 'log',
	logger: 'log',
	proc: 'process',
	process: 'process',
	day: 'day',
	poseidon: 'poseidon',
	hades: 'hades',
	commander: 'commander',
};



const environmentsProcess = (process.env.NENV_PANGU?.split(';') ?? process.env.NENV_PANGU ?? []).filter(env => env.trim())
	.map(env => {
		const [targetRaw, paramsRaw = ''] = env.split(':');
		const target = targetRaw.replace(/^-/, '').toLowerCase();

		return {
			slot: slotsFunction[target] ?? target,
			params: paramsRaw.split(',').filter(param => param.trim()),
			excluded: targetRaw.startsWith('-')
		};
	});

const entriesQuery = [...new URL(import.meta.url).searchParams.entries()];

const environmentsQuery = entriesQuery
	.map(env => {
		const [targetRaw, paramsRaw = ''] = env;
		const target = targetRaw.replace(/^-/, '').toLowerCase();

		return {
			slot: slotsFunction[target] ?? target,
			params: paramsRaw.split(',').filter(param => param.trim()),
			excluded: targetRaw.startsWith('-')
		};
	});

const environments = environmentsQuery.length ? environmentsQuery : environmentsProcess;


const E = process.E = {};
const NE = new Set();

environments.forEach(({ slot, params, excluded }) => {
	if(!excluded) { E[slot] = params; }
	else { NE.add(slot); }
});



const isExportAll = '*' in E;

const isExportDir = !NE.has('dir') && (isExportAll || 'dir' in E);
const isExportPackage = !NE.has('package') && (isExportAll || 'package' in E);
const isExportCommand = !NE.has('command') && (isExportAll || 'command' in E);
const isExportConfig = !NE.has('config') && (isExportAll || 'config' in E);
const isExportLog = !NE.has('log') && (isExportAll || 'log' in E);

const isExportProcess = !NE.has('process') && (isExportAll || 'process' in E);
const isExportDay = !NE.has('day') && (isExportAll || 'day' in E);

const isExportPoseidon = !NE.has('poseidon') && (isExportAll || 'poseidon' in E);
const isExportHades = !NE.has('hades') && (isExportAll || 'hades' in E);
const isExportCommander = !NE.has('commander') && (isExportAll || 'commander' in E);



export const dirPackage = isExportDir ? (await import('./lib/dir.js')).dirPackage : undefined;


/** prefunction: dir */
export const PKG = isExportPackage ? (await import('./lib/package.js')).default : undefined;


/** prefunction: dir */
/** prefunction: package */
export const O = isExportCommand ? (await import('./lib/command.js')).default : undefined;


/** prefunction: dir */
/** prefunction: package */
/** prefunction: command */
export const C = isExportConfig ? (await import('./lib/config.js')).default : undefined;


/** prefunction: dir */
/** prefunction: package */
/** prefunction: command */
/** prefunction: config */
export const G = isExportLog ? (await import('./lib/log.js')).default : undefined;


/** prefunction: dir */
/** prefunction: package */
/** prefunction: log */
if(isExportProcess) { await import('./lib/process.js'); }


export const Day = isExportDay ? (await import('./lib/day.js')).default : undefined;



export const Poseidon = isExportPoseidon ? (await import('@nuogz/poseidon')).default : undefined;
export const Hades = isExportHades ? (await import('@nuogz/hades')).default : undefined;
/** @type {import('commander')} */
export const Commander = isExportCommander ? (await import('commander/esm.mjs')) : undefined;
