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
/** @type {I18NResult} */
declare const i18nDefault: I18NResult;
/** @type {Object<string, I18NResult>} */
declare const i18ns$alias: {
    [x: string]: I18NResult;
};
/** @type {string} */
declare const dirDefault: string;
/** @type {Object<string, string>} */
declare const dirs$alias: {
    [x: string]: string;
};
/** @type {Object} */
declare const packageDefault: Object;
/** @type {Object<string, Object>} */
declare const packages$alias: {
    [x: string]: Object;
};
/** @type {import('commander').OptionValues} */
declare const commandDefault: import('commander').OptionValues;
/** @type {Object<string, import('commander').OptionValues>} */
declare const commands$alias: {
    [x: string]: import('commander').OptionValues;
};
/** @type {import('@nuogz/poseidon').PoseidonInterface} */
declare const configDefault: import('@nuogz/poseidon').PoseidonInterface;
/** @type {Object<string, import('@nuogz/poseidon').PoseidonInterface>} */
declare const configs$alias: {
    [x: string]: import('@nuogz/poseidon').PoseidonInterface;
};
/** @type {import('@nuogz/hades').default} */
declare const logDefault: import('@nuogz/hades').default;
/** @type {import('@nuogz/hades').default | typeof globalThis.console} */
declare const logDefaultSub: import('@nuogz/hades').default | typeof globalThis.console;
/** @type {Object<string, import('@nuogz/hades').default>} */
declare const logs$alias: {
    [x: string]: import('@nuogz/hades').default;
};
/** @type {typeof globalThis.process} */
declare const processDefault: typeof globalThis.process;
/** @type {import('dayjs').Dayjs} */
declare const DayDefault: import('dayjs').Dayjs;
/** @type {import('@nuogz/poseidon').PoseidonInterface} */
declare const PoseidonDefault: import('@nuogz/poseidon').PoseidonInterface;
/** @type {import('@nuogz/hades').default} */
declare const HadesDefault: import('@nuogz/hades').default;
/** @type {import('commander').Command} */
declare const CommanderDefault: import('commander').Command;
export { i18nDefault as i18n, i18ns$alias as i18ns, dirDefault as dirWorking, dirs$alias as dirsWorking, packageDefault as PKG, packages$alias as packages, commandDefault as O, commands$alias as commands, configDefault as C, configs$alias as configs, logDefault as G, logDefaultSub as GG, logs$alias as logs, processDefault as process, DayDefault as Day, PoseidonDefault as Poseidon, HadesDefault as Hades, CommanderDefault as Commander };


import { PoseidonInterface } from '@nuogz/poseidon';
export { PoseidonInterface }
