export type I18NResult = {
    /**
     * ""zh;zh-cn""
     */
    locale: string;
    /**
     * `"hades"`
     */
    foramt: string;
};
/**
 * @typedef {Object} I18NResult
 * @property {string} locale ""zh;zh-cn""
 * @property {string} foramt `"hades"`
 */
/** @type {I18NResult} */
declare let i18nDefault: I18NResult;
/** @type {Object<string, I18NResult>} */
declare const i18ns$alias: {
    [x: string]: I18NResult;
};
/** @type {string} */
declare let dirDefault: string;
/** @type {Object<string, string>} */
declare const dirs$alias: {
    [x: string]: string;
};
/** @type {Object} */
declare let packageDefault: Object;
/** @type {Object<string, Object>} */
declare const packages$alias: {
    [x: string]: Object;
};
/** @type {import('commander').OptionValues} */
declare let commandDefault: import('commander').OptionValues;
/** @type {Object<string, import('commander').OptionValues>} */
declare const commands$alias: {
    [x: string]: import('commander').OptionValues;
};
/** @type {import('@nuogz/poseidon').default} */
declare let configDefault: import('@nuogz/poseidon').default;
/** @type {Object<string, import('@nuogz/poseidon').default>} */
declare const configs$alias: {
    [x: string]: import('@nuogz/poseidon').default;
};
/** @type {import('@nuogz/hades').default} */
declare let logDefault: import('@nuogz/hades').default;
/** @type {import('@nuogz/hades').default | typeof globalThis.console} */
declare let logDefaultSub: import('@nuogz/hades').default | typeof globalThis.console;
/** @type {Object<string, import('@nuogz/hades').default>} */
declare const logs$alias: {
    [x: string]: import('@nuogz/hades').default;
};
/** @type {typeof globalThis.process} */
declare let processDefault: typeof globalThis.process;
/** @type {import('dayjs').Dayjs} */
declare let DayDefault: import('dayjs').Dayjs;
/** @type {import('@nuogz/poseidon').default} */
declare let PoseidonDefault: import('@nuogz/poseidon').default;
/** @type {import('@nuogz/hades').default} */
declare let HadesDefault: import('@nuogz/hades').default;
/** @type {import('commander').Command} */
declare let CommanderDefault: import('commander').Command;
export { i18nDefault as i18n, i18ns$alias as i18ns, dirDefault as dirWorking, dirs$alias as dirsWorking, packageDefault as PKG, packages$alias as packages, commandDefault as O, commands$alias as commands, configDefault as C, configs$alias as configs, logDefault as G, logDefaultSub as GG, logs$alias as logs, processDefault as process, DayDefault as Day, PoseidonDefault as Poseidon, HadesDefault as Hades, CommanderDefault as Commander };
