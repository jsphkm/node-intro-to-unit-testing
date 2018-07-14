const fizzBuzzer = require("../fizzBuzzer.js");
const expect = require('chai').expect;

describe("fizzBuzzer", function(){
    it("should output fizz, buzz, and fizzbuzz if divisible by 3,5, and 15.  Otherwise, output itself.", function(){
        const goodInputs = [
            [1, 1], 
            [2, 2],
            [3, 'fizz'],
            [5, 'buzz'],
            [15, 'fizzbuzz']
        ];

        goodInputs.forEach(function(eachIO) {
            const answer = fizzBuzzer(eachIO[0]);
            expect(answer) == eachIO[1];
        });
    });
    
    it("should raise error if args are not numbers", function(){
        const badInputs = [
            ['a'], ['2']
        ];

        badInputs.forEach(function(eachIO) {
            expect(function(){
                fizzBuzzer(eachIO[0]);
            }).to.throw(Error);
        })
    })

    
})