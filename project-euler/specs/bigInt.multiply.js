let describe = require('mocha').describe;
let expect   = require('expect.js');
let BigInt   = require('../bigInt');

describe('#multiply', () => {
  it('0 * 0 == 0', () => {
    expect(BigInt.multiply(0, 0)).to.be('0');
  });

  it('0 * 1 == 0', () => {
    expect(BigInt.multiply(0, 1)).to.be('0');
  });

  it('1 * 0 == 0', () => {
    expect(BigInt.multiply(1, 0)).to.be('0');
  });

  it('1 * 1 == 1', () => {
    expect(BigInt.multiply(1, 1)).to.be('1');
  });

  it('9 * 1 == 9', () => {
    expect(BigInt.multiply(9, 1)).to.be('9');
  });

  it('1 * 9 == 9', () => {
    expect(BigInt.multiply(1, 9)).to.be('9');
  });

  it('10 * 2 == 20', () => {
    expect(BigInt.multiply(10, 2)).to.be('20');
  });

  it('2 * 10 == 20', () => {
    expect(BigInt.multiply(2, 10)).to.be('20');
  });

  it('12 * 12 == 144', () => {
    expect(BigInt.multiply(12, 12)).to.be('144');
  });

  it('9595959595 * 8675 == 83244949486625', () => {
    expect(BigInt.multiply(9595959595 , 8675)).to.be('83244949486625');
  });

  it('9595959595 * 2 == 19191919190', () => {
    expect(BigInt.multiply(9595959595 , 2)).to.be('19191919190');
  });

  it('9595959595 * 10 == 9595959595 ', () => {
    expect(BigInt.multiply(9595959595 , 10)).to.be('95959595950');
  });

  it('9595959595 * 100 == 9595959595 ', () => {
    expect(BigInt.multiply(9595959595 , 100)).to.be('959595959500');
  });
});
