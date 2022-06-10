const path = require('path');
const fs = require('fs-extra');
const execa = require('execa');

class InitCommand {
  constructor(argv) {
    this.argv = argv;
    this.rootPath = path.resolve();
  }

  async execute() {
    console.info('Initializing Git repository');
    await execa('git', ['init'], { stdio: 'pipe' }); // 初始化git仓库
    await this.ensurePackageJSON();
    await this.ensureLernaConfig();
    await this.ensurePackagesDir();
    console.info('Initalized Lerna2 files');
  }

  async ensurePackageJSON() {
    console.info('创建package.json');
    await fs.writeJSON(path.join(this.rootPath, 'package.json'), {
      name: 'root',
      private: true,
      devDependencies: {
        lerna2: '^0.0.1',
      },
    });
  }

  async ensureLernaConfig() {
    console.info('创建lerna.json');
    await fs.writeJSON(path.join(this.rootPath, 'lerna.json'), {
      packages: ['packages/*'],
      command: {
        bootstrap: {
          hoist: true,
        },
      },
      version: '0.0.1',
    });
  }

  async ensurePackagesDir() {
    console.info('创建packages文件夹');
    await fs.mkdirp(path.join(this.rootPath, 'packages'));
  }
}

function factory(argv) {
  new InitCommand(argv).execute();
}

module.exports = factory;
