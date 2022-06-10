const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');
// pify是可以把回调的方式改为promise的方式
// init-package-json弹出选项填写package信息
const initPackageJson = require('pify')(require('init-package-json'));

class CreateCommand {
  constructor(argv) {
    this.argv = argv;
    this.rootPath = path.resolve();
  }

  async execute() {
    const { name, registry } = this.argv;
    const targetDir = path.join(this.rootPath, `packages/${name}`);
    this.libDir = path.join(targetDir, 'lib');
    this.testDir = path.join(targetDir, '__tests__');
    // 创建lib目录
    await fs.mkdirp(this.libDir);
    // 创建test目录
    await fs.mkdirp(this.testDir);
    // 初始化package.json
    await initPackageJson(targetDir, '');
  }
}

function factory(argv) {
  new CreateCommand(argv).execute();
}

module.exports = factory;
