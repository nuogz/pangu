export default function init(launcher, environment, $pangu) {
	const { package: PKG, log = globalThis.console } = environment;


	process.title = PKG.name;

	process.on('unhandledRejection', (error, promise) => { log?.fatal('进程', '未处理的拒绝', error); });


	return process;
}
