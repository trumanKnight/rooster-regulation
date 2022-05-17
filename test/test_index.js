const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            const expected = 'cock-a-doodle-doo';
            const result = Rooster.announceDawn();

            assert.ok(expected == result);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            const testVar = 10;
            const expected =  testVar.toString();
            const result = Rooster.timeAtDawn(testVar);

            assert.strictEqual(expected, result);
        });
        it('throws an error if passed a number less than 0', () => {
            let hour = -1;
            assert.throws(
                () => {
                    Rooster.timeAtDawn(hour);
                },
                RangeError
            );

        });
        it('throws an error if passed a number greater than 23', () => {
            let hour = 24;
            assert.throws(
                () => {
                    Rooster.timeAtDawn(hour);
                },
                RangeError
            );
        });
    });
});