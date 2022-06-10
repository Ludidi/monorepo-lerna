const yargs = require('yargs/yargs');

function lernaCLI() {
  const cli = yargs();

  const globalOptions = {
    logLevel: {
      type: 'string',
      describe: '日志级别',
      defaultDescription: 'info',
      alias: 'L',
    },
  };

  const globalKeys = Object.keys(globalOptions).concat(['help', 'version']);

  return cli
    .options(globalOptions)
    .group(globalKeys, 'Global Options:')
    .usage('Usage: $0 <command> [options]')
    .demandCommand(1, '至少需要一个命令')
    .strict() // 严格模式
    .recommendCommands() // 命令建议
    .fail((msg, error) => {
      // 错误信息
      console.error(msg, error);
      cli.exit(1);
    })
    .alias('H', 'help')
    .alias('V', 'version')
    .epilogue(`when a command fails, all logs are written to lerna-debug.log in the current working directory`); // 结语
}

module.exports = lernaCLI;
