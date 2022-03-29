function baz(){
    console.log("baz");
}

function bar(){
    console.log("bar");
    baz();
}

function foo(){
    console.log("foo");
    bar();
}

foo();