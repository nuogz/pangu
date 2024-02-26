# CHANGELOG

## v5.0.0 - 2024.02.26 11
* (new)(break) HUGE refactor! See full usages on [REAME](README.md)


## v4.3.1 - 2024.02.11 16
* (new) Current Working Directory is now the default for `dirPackage`


## v4.3.0 - 2024.02.11 16
* (new) can pass environment parameters via `import.meta.url` now
* bump up dependencies


## v4.2.0 - 2023.12.07 14
* bump up `commander` to `v11.x`
* tweak enviroment
* bump up dependencies


## v4.1.0 - 2023.06.01 10
* (new) `command` support for preprocessing custom commands via the `process.preloadCommand` function


## v4.0.2 - 2023.06.01 10
* fix peerDependencies bug
* bump up dependencies
* use eslint flat config, and related config udpate
	* use `eslint.config.js` instead `eslintrc.cjs`


## v4.0.1 - 2023.05.09 19
* fix `package.json`


## v4.0.0 - 2023.05.09 18
* (break) use `day.js` instead `moment.js`
* add `d.ts` and renew related code
* bump up dependencies


## v3.1.2 - 2022.09.05 10
* fix typo code


## v3.1.0 - 2022.09.05 10
* improve the priorities of `logger` configs


## v3.0.4 - 2022.09.02 18
* fix bug when export `Commander`


## v3.0.3 - 2022.09.02 18
* fix bug when init `config` params
* improve slots


## v3.0.2 - 2022.09.02 18
* fix slots case


## v3.0.1 - 2022.09.02 18
* export `Commander`


## v3.0.0 - 2022.09.02 17
* rename environment variable `NENV_PANGU` from `NENV_NODE_FUNC`
* improve codes when parse `NENV_PANGU`
* fix codes and remove unused codes
* split runtime part from `@nuogz/pangu@2`
* reset `CHANGLOG.md` since version `v3.0.0`
