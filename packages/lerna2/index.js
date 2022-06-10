const cli = require('cli');
const initCmd = require('init/command');
const createCmd = require('create/command');

module.exports = main;

function main(argv) {
  return cli().command(initCmd).command(createCmd).parse(argv);
}
