/*
Que.Write a function createHelloWorld. It should return a new function that always returns "HelloWorld".
*/

function createhelloworld(){
    function f(){
        console.log("helloWorld");
    }
    return f;
};

const fn = createhelloworld();
console.log(fn(1));
