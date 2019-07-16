mocha.setup('bdd');
var assert = chai.assert;

describe("toReplaceByWord", function() {

    it("если аргументов меньше чем три, недостающие принимает за пустые строки", function() {
        assert.strictEqual(getChars('3'), false);
    });

    it("если аргументы не являбтся строками - приводит их к этому типу", function() {
        assert.strictEqual(getChars('3'), false);
    });

    it("если первый аргумент пустая строка -возвращает пустую строку", function() {
        assert.strictEqual(getChars('3'), false);
    });

    it("заменяет слова", function() {
        assert.strictEqual(getChars('3'), false);
    });

    it("заменяет слова с учетом регистра", function() {
        assert.strictEqual(getChars(-5), false);
    });

});

mocha.run();
