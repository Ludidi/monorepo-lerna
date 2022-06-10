const yargs = require('yargs/yargs');

const argv = process.argv.splice(2);
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

cli
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
  .epilogue(`when a command fails, all logs are written to lerna-debug.log in the current working directory`) // 结语
  .command({
    command: 'create <name>', // 命令格式
    describe: '创建lerna包',
    builder: (yargs) => {
      yargs
        .positional('name', {
          type: 'string',
          describe: '包名',
        })
        .options({
          registry: {
            group: 'Command Groups:',
            describe: '配置包的发布仓库地址',
            type: 'string',
          },
        });
    },
    handler: (argv) => {
      console.log('执行 create 命令', argv);
    },
  })
  .parse(argv);
