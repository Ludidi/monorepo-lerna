exports.command = 'init';
exports.describe = '创建一个新的仓库';

exports.builder = (yargs) => {
  console.log('yargs init builder');
};

exports.handler = (args) => {
  console.log('执行 init 命令', args);
  return require('.')(args);
};
