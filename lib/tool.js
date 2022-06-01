/**
 * 通过JSON化函数深度拷贝数据
 * @param {Object} objectJSONable 可JSON化的数据
 * @return {Object}
 */
export function copyJSON(objectJSONable) {
	return JSON.parse(JSON.stringify(objectJSONable));
}
