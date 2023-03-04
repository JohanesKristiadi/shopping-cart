const {
    incrementQty,
    decrementQty,
    calculateSubtotal
} = require('../helpers.js');
describe('#helpers', () => {
    describe('increment function', () => {
        it('should return 1 when increment is used', () => {
            expect(incrementQty(1)).toBe(2);
        });

    })
    describe('decrement function', () => {
        it('should return 0 when increment is used', () => {
            expect(decrementQty(2)).toBe(1);
        });

    });

    describe('To make sure add number not string', () => {
        it('should make sure add number not string', () => {
            expect(incrementQty('2')).toBe(3);
        });
    });

    describe('subtotal value', () => {
        it('should return subtotal when increment and decrement is click', () => {
            expect(calculateSubtotal(25000, 3)).toBe(75000)
        });
    });

    describe('test value is still 0 when number is zero', () => {
        it('should return 0 when qty is 0', () => {
            expect(decrementQty(0)).toBe(0);
        });
    });

    describe('calculate discount', () => {
        it('should return price after discount', () => {
            expect(calculateSubtotal(25000, 3, 25)).toBe(56250);
        })
    })
});

