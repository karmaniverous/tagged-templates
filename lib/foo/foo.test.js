/* eslint-env mocha */

// mocha imports
import chai from 'chai';
chai.should();

// subject imports
import { foo } from './foo.js';

describe('foo', function () {
  it('returns default', function () {
    const output = foo();

    output.should.equal('nil');
  });

  it('returns input', function () {
    const input = 'bar';
    const output = foo(input);

    output.should.equal(input);
  });
});
