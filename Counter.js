function createCounter(n) {
    return function() {
        return n++;
    };
}

const counterFunction = createCounter(10);

console.log(counterFunction()); // Output: 10
console.log(counterFunction()); // Output: 11
console.log(counterFunction()); // Output: 12
