import splitEscape from './lib/split-escape.js';



if('$pangu' in globalThis == false) {
	globalThis.$pangu = {
		utils$short: {
			i18n: 'i18n',
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
		},
		orders$util: {
			i18n: 1,
			dir: 2,
			package: 3,
			command: 4,
			config: 5,
			log: 6,
			process: 7,
			day: 99,
			poseidon: 99,
			hades: 99,
			commander: 99,
		},
		subs$urlImport: {},
		utils$name: {},
		utilsExport: {
			i18nDefault: void 0,
			i18ns$alias: {},
			dirDefault: void 0,
			dirs$alias: {},
			packageDefault: void 0,
			packages$alias: {},
			commandDefault: void 0,
			commands$alias: {},
			configDefault: void 0,
			configs$alias: {},
			logDefault: void 0,
			logDefaultSub: globalThis.console,
			logs$alias: {},

			processDefault: void 0,
			DayDefault: void 0,
			PoseidonDefault: void 0,
			HadesDefault: void 0,
			CommanderDefault: void 0,
		},
		promisesWait: [],
	};
}
const $pangu = globalThis.$pangu;


const urlImport = import.meta.url;


const { utils$name, orders$util, utils$short, utilsExport } = $pangu;
const subScoped = $pangu.subs$urlImport[urlImport] = {
	launchers$name: {},
	environments$space: {},
};

const environments$space = subScoped.environments$space;
const launchers$name = subScoped.launchers$name;


const parseParamString = string => {
	for(let [shortRaw, paramsRaw = ''] of [...new URL(string).searchParams.entries()]) {
		const optional = shortRaw[0] == '?';

		if(optional) { shortRaw = shortRaw.slice(1); }
		shortRaw = shortRaw.toLowerCase();


		const [shortRaw2, keyParamNamed = ''] = splitEscape(shortRaw, '\\.');
		const [short, alias = '', space = ''] = splitEscape(shortRaw2, ':');

		const util = utils$short[short] ?? short;
		const name = `${util}${alias ? `:${alias}` : ''}`;


		const launcher = name in launchers$name ? launchers$name[name] : (launchers$name[name] = {
			name, util, alias, space,
			enabled: false,
			params: {},
		});


		if(!keyParamNamed.trim() && !optional) { launcher.enabled = true; }

		launcher.params[keyParamNamed.trim() || 'default'] = splitEscape(paramsRaw, ',');
	}
};

parseParamString(`https://world.peace?${process.env.NENV_PANGU ?? ''}`);
parseParamString(import.meta.url);
// parseParamString(paramsStringCLI);


/**
 * @typedef {Object} I18NResult
 * @property {string} locale ""zh;zh-cn""
 * @property {string} foramt `"hades"`
 */


const exportUtil = (util, launcher) => {
	if(launcher.util == 'i18n') {
		utilsExport.i18ns$alias[launcher.alias] = util;

		if(launcher.alias == '') { utilsExport.i18nDefault = util; }
	}
	if(launcher.util == 'dir') {
		utilsExport.dirs$alias[launcher.alias] = util;

		if(launcher.alias == '') { utilsExport.dirDefault = util; }
	}
	if(launcher.util == 'package') {
		utilsExport.packages$alias[launcher.alias] = util;

		if(launcher.alias == '') { utilsExport.packageDefault = util; }
	}
	if(launcher.util == 'command') {
		utilsExport.commands$alias[launcher.alias] = util;

		if(launcher.alias == '') { utilsExport.commandDefault = util; }
	}
	if(launcher.util == 'config') {
		utilsExport.configs$alias[launcher.alias] = util;

		if(launcher.alias == '') { utilsExport.configDefault = util; }
	}
	if(launcher.util == 'log') {
		utilsExport.logs$alias[launcher.alias] = util;

		if(launcher.alias == '') { utilsExport.logDefault = util; utilsExport.logDefaultSub = util; }
	}

	if(launcher.util == 'process') { utilsExport.processDefault = util; }
	if(launcher.util == 'day') { utilsExport.DayDefault = util; }
	if(launcher.util == 'poseidon') { utilsExport.PoseidonDefault = util; }
	if(launcher.util == 'hades') { utilsExport.HadesDefault = util; }
	if(launcher.util == 'commander') { utilsExport.CommanderDefault = util; }
};


const initDefaultUtil = async (util, space, environment) => {
	const launcher = util in launchers$name ? launchers$name[util] : (launchers$name[util] = {
		name: util, util, alias: '', space,
		enabled: false,
		params: {},
	});

	launcher.enabled = true;

	return initUtil(launcher, environment);
};
const initUtil = async (launcher, environment) => {
	if(!launcher.enabled) { return; }

	let util;
	if(launcher.util == 'i18n') {
		util = (await import('./util/i18n.js')).default(launcher, environment, $pangu);
	}
	if(launcher.util == 'dir') {
		util = (await import('./util/dir.js')).default(launcher, environment, $pangu);
	}
	if(launcher.util == 'package') {
		if(!environment.$imported.dir) { await initDefaultUtil('dir', launcher.space, environment); }

		util = (await import('./util/package.js')).default(launcher, environment, $pangu);
	}
	if(launcher.util == 'command') {
		if(!environment.$imported.package) { await initDefaultUtil('package', launcher.space, environment); }

		util = (await import('./util/command.js')).default(launcher, environment, $pangu);
	}
	if(launcher.util == 'config') {
		if(!environment.$imported.dir) { await initDefaultUtil('dir', launcher.space, environment); }

		util = (await import('./util/config.js')).default(launcher, environment, $pangu);
	}
	if(launcher.util == 'log') {
		if(!environment.$imported.dir) { await initDefaultUtil('dir', launcher.space, environment); }
		if(!environment.$imported.package) { await initDefaultUtil('package', launcher.space, environment); }
		if(!environment.$imported.config) { await initDefaultUtil('config', launcher.space, environment); }

		util = (await import('./util/log.js')).default(launcher, environment, $pangu);
	}

	if(launcher.util == 'process') {
		if(!environment.$imported.package) { await initDefaultUtil('package', launcher.space, environment); }
		if(!environment.$imported.log) { await initDefaultUtil('log', launcher.space, environment); }

		util = (await import('./util/process.js')).default(launcher, environment, $pangu);
	}
	if(launcher.util == 'day') {
		util = (await import('./util/day.js')).default(launcher, environment, $pangu);
	}

	if(launcher.util == 'poseidon') {
		util = environment.$imported[launcher.util] ? environment.Poseidon : (environment.Poseidon = (await import('@nuogz/poseidon')).Poseidon);
	}
	if(launcher.util == 'hades') {
		util = environment.$imported[launcher.util] ? environment.Hades : (environment.Hades = (await import('@nuogz/hades')).default);
	}
	if(launcher.util == 'commander') {
		util = environment.$imported[launcher.util] ? environment.Commander : (environment.Commander = (await import('commander/esm.mjs')));
	}


	if(util) { environment.$imported[launcher.util] = true; }

	return util;
};

const promisesWait = $pangu.promisesWait;
for(const launcher of Object.values(launchers$name).sort(({ util: a }, { util: b }) => (orders$util[a] ?? 9999) - (orders$util[b] ?? 9999))) {
	const environment = environments$space[launcher.space] ?? (environments$space[launcher.space] = { $imported: {} });


	let util = utils$name[launcher.name];
	let promiseInit;

	if(!util) {
		promiseInit = utils$name[launcher.name] = initUtil(launcher, environment).then(util => {
			utils$name[launcher.name] = util;

			if(util) { exportUtil(util, launcher); }

			return util;
		});
	}
	else if(util instanceof Promise) {
		promiseInit = util.then(util => {
			if(util) { exportUtil(util, launcher); }
		});
	}
	else {
		exportUtil(util, launcher);
	}

	promisesWait.push(promiseInit);
}

await Promise.all(promisesWait);



/** @type {I18NResult} */
const i18nDefault = utilsExport.i18nDefault;
/** @type {Object<string, I18NResult>} */
const i18ns$alias = utilsExport.i18ns$alias;
/** @type {string} */
const dirDefault = utilsExport.dirDefault;
/** @type {Object<string, string>} */
const dirs$alias = utilsExport.dirs$alias;
/** @type {Object} */
const packageDefault = utilsExport.packageDefault;
/** @type {Object<string, Object>} */
const packages$alias = utilsExport.packages$alias;
/** @type {import('commander').OptionValues} */
const commandDefault = utilsExport.commandDefault;
/** @type {Object<string, import('commander').OptionValues>} */
const commands$alias = utilsExport.commands$alias;
/** @type {import('@nuogz/poseidon').PoseidonInterface} */
const configDefault = utilsExport.configDefault;
/** @type {Object<string, import('@nuogz/poseidon').PoseidonInterface>} */
const configs$alias = utilsExport.configs$alias;
/** @type {import('@nuogz/hades').default} */
const logDefault = utilsExport.logDefault;
/** @type {import('@nuogz/hades').default | typeof globalThis.console} */
const logDefaultSub = utilsExport.logDefaultSub;
/** @type {Object<string, import('@nuogz/hades').default>} */
const logs$alias = utilsExport.logs$alias;

/** @type {typeof globalThis.process} */
const processDefault = utilsExport.processDefault;
/** @type {import('dayjs').Dayjs} */
const DayDefault = utilsExport.DayDefault;
/** @type {import('@nuogz/poseidon').PoseidonInterface} */
const PoseidonDefault = utilsExport.PoseidonDefault;
/** @type {import('@nuogz/hades').default} */
const HadesDefault = utilsExport.HadesDefault;
/** @type {import('commander').Command} */
const CommanderDefault = utilsExport.CommanderDefault;



export {
	i18nDefault as i18n,
	i18ns$alias as i18ns,
	dirDefault as dirWorking,
	dirs$alias as dirsWorking,
	packageDefault as PKG,
	packages$alias as packages,
	commandDefault as O,
	commands$alias as commands,

	configDefault as C,
	configs$alias as configs,
	logDefault as G,
	logDefaultSub as GG,
	logs$alias as logs,

	processDefault as process,
	DayDefault as Day,
	PoseidonDefault as Poseidon,
	HadesDefault as Hades,
	CommanderDefault as Commander,
};
