import { maxNumber } from './helper';

describe('maxNumber', () => {

    describe('given an empty array', () => {
        it('return 0', () => {
            expect(maxNumber([])).toEqual(0);
        });
    });

    describe('given an array of numbers [3, 5, 8]', () => {
        it('return the max number 8', () => {
            expect(maxNumber([3, 5, 8])).toEqual(8);
        });
    });
});