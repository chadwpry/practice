let describe = require('mocha').describe;
let expect   = require('expect.js');
let BigInt   = require('../bigInt');

describe('#subtract', () => {
  describe('when both values are the same', () => {
    it('0 - 0 == 0', () => {
      expect(BigInt.subtract(0, 0)).to.be('0');
    });

    it('1 - 1 == 0', () => {
      expect(BigInt.subtract(1, 1)).to.be('0');
    });
  });

  describe('when sum is positive', () => {
    it('1 - 0 == 1', () => {
      expect(BigInt.subtract(1, 0)).to.be('1');
    });

    it('8 - 7 == 1', () => {
      expect(BigInt.subtract(8, 7)).to.be('1');
    });

    it('12 - 8 == 4', () => {
      expect(BigInt.subtract(12, 8)).to.be('4');
    });

    it('18 - 7 == 11', () => {
      expect(BigInt.subtract(18, 7)).to.be('11');
    });

    it('128 - 7 == 121', () => {
      expect(BigInt.subtract(128, 7)).to.be('121');
    });

    it('128 - 17 == 111', () => {
      expect(BigInt.subtract(128, 17)).to.be('111');
    });

    describe('when borrowing from next digit', () => {
      it('15 - 9 == 6', () => {
        expect(BigInt.subtract(15, 9)).to.be('6');
      });

      it('121 - 7 == 114', () => {
        expect(BigInt.subtract(121, 7)).to.be('114');
      });

      it('128 - 39 == 89', () => {
        expect(BigInt.subtract(128, 39)).to.be('89');
      });
    })
  });
});
