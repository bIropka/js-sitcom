mocha.setup('bdd');
var assert = chai.assert;

describe("whenNY", function() {

    it("возвращает объект", function() {
        assert.strictEqual(typeof whenNY(), 'object');
    });

});

mocha.run();
