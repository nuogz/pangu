import G from './log.js';
import PKG from './package.js';



process.title = PKG.name;
process.on('unhandledRejection', (error, promise) => { G.fatal('进程', '未处理的拒绝', error); });
