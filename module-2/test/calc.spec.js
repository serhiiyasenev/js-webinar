'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    it('should have proper initial value', () => {
        // When 
        const c = calc(3);
        // Then 
        expect(c.v).to.be.equal(3);
    });

    describe('calculations', () => {
        it('should do several calculations', () => {
                // Given 
                const c = calc(3);
                // When
                c.add(4).minus(3).times(6);
                // Then 
                expect(c.v).to.be.equal(24);
        });
    });

    describe('.modulo', () => {
        it('should have method to modulo', () => {
            // Given 
            const c = calc(10);
            // When
            c.modulo(5);
            // Then 
            expect(c.v).to.be.equal(0);
        });

        it('modulo should return remainder of the division', () => {
            // Given 
            const c = calc(10);
            // When
            c.modulo(3);
            // Then 
            expect(c.v).to.be.equal(1);
        });

        it('modulo should return remainder of the division for non-positive initial value', () => {
            // Given 
            const c = calc(-10);
            // When
            c.modulo(3);
            // Then 
            expect(c.v).to.be.equal(-1);
        });

        it('modulo should return remainder of the division for non-positive divisor', () => {
            // Given 
            const c = calc(10);
            // When
            c.modulo(-3);
            // Then 
            expect(c.v).to.be.equal(1);
        });
    });

    describe('.divide', () => {
        it('should throw an error when devide by 0, because division by 0 is not possible', () => {
            // Given
            const c = calc(5);
            //Then
            expect(() => c.divide(0)).to.throw();
        });

        it('should have method to divide value', () => {
            //Given
            const c = calc(10);
            // When 
            c.divide(5);
            // Then 
            expect(c.v).to.be.equal(2); 
         });

            it('should divide the same value as the current one', () => {
                // Given
                const c = calc(5);
                //When
                c.divide(5);
                //Then
                expect(c.v).to.be.equal(1); 
            });

            it('should divide for the same, but another sign', () => {
                // Given
                const c = calc(5);
                //When
                c.divide(-5);
                //Then
                expect(c.v).to.be.equal(-1); 
            });
        });

    describe('.times', () => {
        it('should have method to times value', () => {
            //Given
            const c = calc(3);
            // When 
            c.times(10);
            // Then 
            expect(c.v).to.be.equal(30); 
         });

            it('should time the same value as the current one', () => {
                // Given
                const c = calc(5);
                //When
                c.times(5);
                //Then
                expect(c.v).to.be.equal(25); 
            });

            it('should time the same value as the current one, but with another sign', () => {
                // Given
                const c = calc(5);
                //When
                c.times(-5);
                //Then
                expect(c.v).to.be.equal(-25); 
            });

            it('should time to 0', () => {
                // Given
                const c = calc(5);
                //When
                c.times(0);
                //Then
                expect(c.v).to.be.equal(0); 
            });
        });

    describe('.minus', () => {
        it('should have method to minus value', () => {
            //Given
            const c = calc(3);
            // When 
            c.minus(5);
            // Then 
            expect(c.v).to.be.equal(-2); 
         });

         it('should minus any value to the current one', () => {
             // Given
             const c = calc(3);
             //When
             c.minus(1);
             //Then
             expect(c.v).not.to.be.undefined;
            });

            it('should minus the same value as the current one', () => {
                // Given
                const c = calc(10);
                //When
                c.minus(10);
                //Then
                expect(c.v).to.be.equal(0); 
            });
        });

    describe('.add', () => {
        it('should have method to add value', () => {
            //Given
            const c = calc(3);
            // When 
            c.add(5);
            // Then 
            expect(c.v).to.be.equal(8);
         });

         it('should add any value to the current one', () => {
             // Given
             const c = calc(3);
             //When
             c.add(5);
             //Then
             expect(c.v).not.to.be.undefined;
            });
        });

    describe('.sqrt', () => {
        it('should have method to compute square root', () => {
            // Given
            const c = calc(3);
            // When
            c.sqrt();
            // Then
            expect(c.v).not.to.be.undefined;
        });

        it('should compute the square root on non-negative value', () => {
            // Given
            const c = calc(9);
            // When
            c.sqrt();
            // Then
            expect(c.v).to.be.equal(3);
        });

        it('should throw an error for negative value', () => {
            // Given
            const c = calc(-3);
            // Then 
            expect(c.sqrt).to.throw();
        });
    });
});