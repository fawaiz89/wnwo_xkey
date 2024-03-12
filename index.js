const genId1 = require('jpot_xid');
const genId2 = require('drwq_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|N2q7aQtt24|' + genId2()).digest('base64');
}


module.exports = generateKey;
