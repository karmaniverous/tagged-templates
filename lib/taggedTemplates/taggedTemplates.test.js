/* eslint-env mocha */

// mocha imports
import chai from 'chai';
const expect = chai.expect;

// subject imports
import { def, n2e, sn2e, sn2u } from './taggedTemplates.js';

describe('util', function () {
  describe('taggedTemplates', function () {
    describe('def', function () {
      it('works with fully embedded expressions', function () {
        const tag = def`Hello ${'world'}!`;
        const reg = `Hello ${'world'}!`;

        expect(tag).to.equal(reg);
      });

      it('works with expression at ends', function () {
        const tag = def`Hello ${'world'}!`;
        const reg = `Hello ${'world'}!`;

        expect(tag).to.equal(reg);
      });

      it('works with null expression', function () {
        const tag = def`Hello ${null}!`;
        const reg = `Hello ${null}!`;

        expect(tag).to.equal(reg);
      });

      it('works with undefined expression', function () {
        const tag = def`Hello ${undefined}!`;
        const reg = `Hello ${undefined}!`;

        expect(tag).to.equal(reg);
      });
    });

    describe('sn2u', function () {
      it('works with no nils', function () {
        const tag = sn2u`${'a'} ${'b'} ${'c'}`;

        expect(tag).to.equal('a b c');
      });

      it('works with undefined', function () {
        const tag = sn2u`${'a'} ${undefined} ${'c'}`;

        expect(tag).to.be.undefined;
      });

      it('works with null', function () {
        const tag = sn2u`${'a'} ${null} ${'c'}`;

        expect(tag).to.be.undefined;
      });
    });

    describe('sn2e', function () {
      it('works with no nils', function () {
        const tag = sn2e`${'a'} ${'b'} ${'c'}`;

        expect(tag).to.equal('a b c');
      });

      it('works with undefined', function () {
        const tag = sn2e`${'a'} ${undefined} ${'c'}`;

        expect(tag).to.equal('');
      });

      it('works with null', function () {
        const tag = sn2e`${'a'} ${null} ${'c'}`;

        expect(tag).to.equal('');
      });
    });

    describe('n2e', function () {
      it('works with no nils', function () {
        const tag = n2e`${'a'} ${'b'} ${'c'}`;

        expect(tag).to.equal('a b c');
      });

      it('works with undefined', function () {
        const tag = n2e`${'a'} ${undefined} ${'c'}`;

        expect(tag).to.equal('a  c');
      });

      it('works with null', function () {
        const tag = n2e`${'a'} ${null} ${'c'}`;

        expect(tag).to.equal('a  c');
      });
    });
  });
});
