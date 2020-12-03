const dns = require('dns');

exports.lambdaHandler = async (event) => {
    dns.lookup('luxsci.com', (err, address, family) =>
        console.log('address: %j family: IPv%s', address, family));
};