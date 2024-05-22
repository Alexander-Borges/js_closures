const globalNum = 5;

function logNum() {
    const localNum = 1;
    console.log(globalNum + localNum);
}
// Lexical scoping
// functions have acccess to their parent's scope
// this is called a closure
logNum();

function example() {
    const num = 5;

    return function() {
        console.log(num);
    }
}

const innerFunction = example();

innerFunction();

//Private methods
function makeFunction() {
    let privateNum = 0;

    function privateIncrement() {
        privateNum++;
    }
    return {
        logNumber: () => console.log(privateNum),
        increment: () => {
            privateIncrement();
            console.log("Incremented");
        }
    }
}

const { logNumber, increment} = makeFunction();
logNumber();
increment();
logNumber();
console.log();

// let is block scoped
// var is function scoped
for(let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 5000);

}