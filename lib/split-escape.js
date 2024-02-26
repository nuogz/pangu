const splitEscape = (string, splitter) => string
	.split(RegExp(`(?<!\\\\)${splitter}`))
	.map(str => str.trim().replace(RegExp(`\\\\${splitter}`, 'g'), ','));



export default splitEscape;
