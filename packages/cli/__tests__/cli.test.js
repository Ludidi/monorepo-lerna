'use strict';

const cli = require('..');

describe('lerna cli', () => {
  it('cli', () => {
    expect(cli()).toBe('cli');
  });
});
