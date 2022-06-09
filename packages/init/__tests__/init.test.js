'use strict';

const init = require('..');

describe('lerna init', () => {
  it('init', () => {
    expect(init()).toBe('init');
  });
});
