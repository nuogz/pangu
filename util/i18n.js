const parseLocalesSystem = () => {
	const partsLocale = Intl.DateTimeFormat().resolvedOptions().locale.split('-');

	return partsLocale.reduce((acc, cur, index) => (
		acc.push(partsLocale.slice(0, index + 1).join('-').toLowerCase()),
		acc
	), []).join(';');
};



export default function init(launcher, environment, $pangu) {
	const localeSystem = parseLocalesSystem();


	const locale =
		launcher.params.locale?.join(';').replace(/(?<!\\)<sys(?<!\\)>/g, localeSystem).replace(/\\([<>])/g, '$1') ||
		launcher.params.default?.[0] ||
		localeSystem;

	const format = launcher.params.format?.[0] ||
		launcher.params.default?.[1] ||
		'hades';


	environment.locale = locale;
	environment.format = format;


	process.env.NENV_I18N_LOCALE = locale;
	process.env.NENV_I18N_FORMAT = format;


	return { locale, format };
}
