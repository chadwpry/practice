let describe = require('mocha').describe;
let expect   = require('expect.js');
let BigInt   = require('../bigInt');

describe('#add', () => {
  it('0 + 0 == 0', () => {
    expect(BigInt.add(0, 0)).to.be('0');
  });

  it('1 + 0 == 1', () => {
    expect(BigInt.add(1, 0)).to.be('1');
  });

  it('0 + 1 == 1', () => {
    expect(BigInt.add(0, 1)).to.be('1');
  });

  it('1 + 1 == 2', () => {
    expect(BigInt.add(1, 1)).to.be('2');
  });

  it('8 + 8 == 16', () => {
    expect(BigInt.add(8, 8)).to.be('16');
  });

  it('14 + 8 == 22', () => {
    expect(BigInt.add(14, 8)).to.be('22');
  });

  it('234 + 1001 == 1235', () => {
    expect(BigInt.add(234, 1001)).to.be('1235');
  });

  it('1111111111111119 + 1111111111111119 == 2222222222222238', () => {
    expect(BigInt.add(1111111111111119, 1111111111111119)).to.be('2222222222222238');
  });
});
