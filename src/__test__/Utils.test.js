import Utils from '../utils/utils';

describe('Utils', () => {
    describe("getNthPrime", () => {
    
        it("should return the nth prime number", () => {
        const utils = Utils();
          expect(utils.getNthPrime(1)).toBe(2);
          expect(utils.getNthPrime(2)).toBe(3);
          expect(utils.getNthPrime(3)).toBe(5);
          expect(utils.getNthPrime(4)).toBe(7);
          expect(utils.getNthPrime(5)).toBe(11);
          expect(utils.getNthPrime(6)).toBe(13);
          expect(utils.getNthPrime(7)).toBe(17);
          expect(utils.getNthPrime(8)).toBe(19);
          expect(utils.getNthPrime(9)).toBe(23);
          expect(utils.getNthPrime(10)).toBe(29);
        });
      });

        describe("getNthMultipleOf3", () => {
        it("should return the nth multiple of 3", () => {
            const utils = Utils();
            expect(utils.getNthMultipleOf3(1)).toBe(3);
            expect(utils.getNthMultipleOf3(2)).toBe(6);
            expect(utils.getNthMultipleOf3(3)).toBe(9);
            expect(utils.getNthMultipleOf3(4)).toBe(12);
            expect(utils.getNthMultipleOf3(5)).toBe(15);
            expect(utils.getNthMultipleOf3(6)).toBe(18);
            expect(utils.getNthMultipleOf3(7)).toBe(21);
            expect(utils.getNthMultipleOf3(8)).toBe(24);
            expect(utils.getNthMultipleOf3(9)).toBe(27);
            expect(utils.getNthMultipleOf3(10)).toBe(30);
            }
        );
    });

    describe("isPrime", () => {

        it("should return true if n is prime", () => {
            const utils = Utils();
            expect(utils.isPrime(2)).toBeTruthy();
            expect(utils.isPrime(3)).toBeTruthy();
            expect(utils.isPrime(5)).toBeTruthy();
            expect(utils.isPrime(7)).toBeTruthy();
            expect(utils.isPrime(11)).toBeTruthy();
            expect(utils.isPrime(13)).toBeTruthy();
            expect(utils.isPrime(17)).toBeTruthy();
            expect(utils.isPrime(19)).toBeTruthy();
            expect(utils.isPrime(23)).toBeTruthy();
            expect(utils.isPrime(29)).toBeTruthy();
            }
        );

        it("should return false if n is not prime", () => {
            const utils = Utils();
            expect(utils.isPrime(4)).toBeFalsy();
            expect(utils.isPrime(6)).toBeFalsy();
            expect(utils.isPrime(8)).toBeFalsy();
            expect(utils.isPrime(9)).toBeFalsy();
            expect(utils.isPrime(10)).toBeFalsy();
            expect(utils.isPrime(12)).toBeFalsy();
            expect(utils.isPrime(14)).toBeFalsy();
            expect(utils.isPrime(15)).toBeFalsy();
            expect(utils.isPrime(16)).toBeFalsy();
            expect(utils.isPrime(18)).toBeFalsy();
            expect(utils.isPrime(20)).toBeFalsy();
            expect(utils.isPrime(21)).toBeFalsy();
            expect(utils.isPrime(22)).toBeFalsy();
            expect(utils.isPrime(24)).toBeFalsy();
            expect(utils.isPrime(25)).toBeFalsy();
            expect(utils.isPrime(26)).toBeFalsy();
            expect(utils.isPrime(27)).toBeFalsy();
            expect(utils.isPrime(28)).toBeFalsy();
            expect(utils.isPrime(30)).toBeFalsy();
            }
        );
    }
    );

})







