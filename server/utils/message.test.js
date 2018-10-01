const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', done => {
    const from = 'Nhi';
    const text = 'dummy text';
    const message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toEqual(from);
    expect(message.text).toEqual(text);
    done();
  });
});