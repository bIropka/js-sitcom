mocha.setup('bdd');
const assert = chai.assert;

describe("whenNY", function() {

    it("возвращает число", function() {
        assert.strictEqual(typeof whenNY(), 'number');
    });

    it("правильный ответ :)", function() {
        assert.strictEqual(whenNY(), Math.trunc( ( new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0) - new Date().getTime()) / 86400000 ) );
    });

});

mocha.run();
