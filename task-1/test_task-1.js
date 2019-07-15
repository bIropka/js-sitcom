mocha.setup('bdd');
var assert = chai.assert;

describe("getChars", function() {

    it("выводит false если введена строка", function() {
        assert.strictEqual(getChars('3'), false);
    });

    it("выводит false если введено отрицательное число", function() {
        assert.strictEqual(getChars(-5), false);
    });

    it("выводит false если введено не целое число", function() {
        assert.strictEqual(getChars(2.7), false);
    });

    it("выводит 'x' если функция вызвана без параметров", function() {
        assert.strictEqual(getChars(), 'x');
    });

    it("выводит 'x' если введено 1", function() {
        assert.strictEqual(getChars(1), 'x');
    });

    it("выводит 'xxx' если введено 3", function() {
        assert.strictEqual(getChars(3), 'xxx');
    });

    it("выводит 'xxxxxxx' если введено 7", function() {
        assert.equal(getChars(7), 'xxxxxxx');
    });

});

mocha.run();
