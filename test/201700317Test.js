const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../201700317');


mult = app.multiplicacion(3, 6);
div = app.division(3, 6);
fact = app.factorial(3);
ack = app.ackermann(2, 3);
arr = app.arregloMagico(13);


describe('App', function () {
    describe('multiplicacion()', function () {

        it('sayHello should return type number', function () {
            //let result = app.sayHello();
            assert.typeOf(mult, 'number');
        });
    });

    describe('division()', function () {

        it('division should return type number', function () {
            //let result = app.sayHello();
            assert.typeOf(div, 'number');
        });
    });

    describe('factorial()', function () {

        it('factorial should return type number', function () {
            //let result = app.sayHello();
            assert.typeOf(mult, 'number');
        });
    });

    describe('ackermann()', function () {

        it('ackermann should return type number', function () {
            //let result = app.sayHello();
            assert.typeOf(ack, 'number');
        });
    });


    describe('arregloMagico()', function () {

        it('arregloMagico should return type array', function () {
            //let result = app.sayHello();
            
            assert.typeOf(arr, 'array');
        });
    });


});