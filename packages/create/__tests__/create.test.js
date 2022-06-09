'use strict';

const create = require('..');

describe('lerna create', () => {
  it('create', () => {
    expect(create()).toBe('create');
  });
});
