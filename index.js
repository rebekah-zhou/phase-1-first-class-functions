function receivesAFunction(cb) {
    cb();
    return;
}

returnsANamedFunction = () => function namedFunc() {};

function returnsAnAnonymousFunction() {
    return (function() {});
}