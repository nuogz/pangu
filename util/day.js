import Day from 'dayjs';
import DayCustomParseFormatPlugin from 'dayjs/plugin/customParseFormat.js';
import 'dayjs/locale/zh-cn.js';



export default function init(launcher, environment, $pangu) {
	Day.extend(DayCustomParseFormatPlugin);


	Day.locale('zh-cn');
	Day.prototype.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
	Day.prototype.formatRaw = Day.prototype.format;
	Day.prototype.format = function(formatStr = this.defaultFormat) { return this.formatRaw(formatStr || this.defaultFormat); };


	return Day;
}
