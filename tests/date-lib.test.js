const {D} = require('../src/date-lib')

test('Sanity Check', () => {
    // this test 
})

test('Date Instantiation w/ String', () => {
    // const obj1 = new D('9/26/1965');
    // expect(obj1).toEqual('');

    // const obj2 = new D(1970, 1, 1, 0, 0, 0);
    // expect(obj2).toBe('');
})

test('Provide Readable Values for Date', () => {
    const obj = new D(1996, 6, 9, 0, 0, 0);
    expect(obj.year()).toEqual(1996);
    expect(obj.month()).toEqual(6);
    expect(obj.day()).toEqual(9);
    expect(obj.hours()).toEqual(0);
    expect(obj.mins()).toEqual(0);
    expect(obj.secs()).toEqual(0);
})

test('Convert Mask String', () => {
    const obj = new D(1996, 6, 9, 4, 2, 0);
    expect(obj.format()).toEqual('1996 June 09');
    expect(obj.format('y/m/d')).toEqual('96/Jun/9');
    expect(obj.format('H:I:S')).toEqual('04:02:00');
    expect(obj.format('h:i:s')).toEqual('4:2:0');
    expect(obj.format('Y-M-D h:I:S')).toEqual('1996-June-09 4:02:00');
})

test('Find When A Date Occurs/Occured', () => {
    const pastYear = new D(1996, 6, 9, 4, 2, 0);
    const anotherDate = new D(1997, 6, 9, 4, 2, 0);
    const when = pastYear.when(anotherDate);
    expect(when).toEqual('12.00 months ago');
})