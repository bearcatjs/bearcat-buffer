var OutBuffer = require('../lib/outBuffer');
var InBuffer = require('../lib/inBuffer');

var outBuffer = new OutBuffer();

var case1 = [1, '1', 'aaa', 1.2, {
	a: 1
}, new Buffer('aaa'), -1, 0, null, NaN, undefined];

var case2 = [-100];

var value = case1;

outBuffer.writeObject(value);
// outBuffer.writeObject(case1);

var buf = outBuffer.getBuffer();
console.log(buf.length);

var inBuffer = new InBuffer(buf);
var obj = inBuffer.readObject();

console.log(obj)