const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Deb';
    const lat = 15;
    const long = 20;
    const url = 'https://www.google.com/maps?q=15,20';
    const message = generateLocationMessage(from, lat, long);
    expect(typeof message.createdAt).toBe('number');
    expect(message.from).toEqual(from);
    expect(message.url).toEqual(url);
  });
});