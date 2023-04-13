
const Utils = () =>{
    const getNthPrime = (n) =>{
        if (n <= 0) return undefined;
        let count = 0;
        let num = 2;
        while (count < n) {
        if (isPrime(num)) count++;
        if (count === n) return num;
        num++;
        }
    }

    const getNthMultipleOf3 = (n) =>{
        if (n <= 0) return undefined;
        return n * 3;
    }

    const isPrime = (n) =>{
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        let i = 5;
        while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
        }
        return true;
    }

    return { getNthPrime, getNthMultipleOf3 };

}

module.exports = Utils;
