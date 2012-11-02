module.exports = process.env.HOSTS_COV ? 
  require('./lib-cov/hosts.js') : require('./lib/hosts.js');