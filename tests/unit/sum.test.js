const sum = require('../../js/sum.js');

test('description add 1', () => {
    expect(sum.sum(1,2)).toBe(3);
});

test('description add 2', () => {
    expect(sum.sum(2,2)).toBe(4);
});

test('description sum 1', () => {
    expect(sum.mul(2, 3)).toBe(6);
})