exports.command = 'create <name>';
exports.describe = '创建新的package';

exports.builder = (yargs) => {
  yargs
    .positional('name', {
      // 匹配name
      type: 'string',
      describe: 'package name',
    })
    .options({
      // 选项 lerna crate xxx --registry
      registry: {
        group: 'Command Groups:',
        describe: '配置包的发布仓库地址',
        type: 'string',
      },
    });
};

exports.handler = (args) => {
  console.log('执行 create 命令', args);
  return require('.')(args);
};
