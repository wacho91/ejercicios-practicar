const { sumOfArray, factorChain, isHarshad, isDisarium, reverseWords} = require('./ejercicios');

xdescribe('sumOfArray', () => {
    
    it('sumArray([1, 2, 3]) ➞ 6', () => {
        expect(sumArray([1, 2, 3])).toBe(6);
    });

    it('sumArray([1, [2, [1]], 3]) ➞ 7', () => {
        expect(sumOfArray([1, [2, [1]], 3])).toBe(7);
    });

    it('sumArray([]) ➞ 0', () => {
        expect(sumOfArray([])).toBe(0)
    });

    it('sumArray([[[]]]) ➞ 0', () => {
        expect(sumOfArray([[[]]])).toBe(0)
    });

});

xdescribe('factorChain', () => {
    
    it('factorChain([1, 2, 4, 8, 16, 32]) ➞ true', () => {
        expect(factorChain([1, 2, 4, 8, 16, 32])).toBe(true);
    });

    it('factorChain([1, 1, 1, 1, 1, 1]) ➞ true', () => {
        expect(factorChain([1, 1, 1, 1, 1, 1])).toBe(true);
    });

    it('factorChain([2, 4, 6, 7, 12]) ➞ false', () => {
        expect(factorChain([2, 4, 6, 7, 12])).toBe(false)
    });

    it('factorChain([10, 1]) ➞ false', () => {
        expect(factorChain([10, 1])).toBe(false)
    });

});

xdescribe('isHarshad', () => {

    it('isHarshad(75) ➞ false', () => {
        expect(isHarshad(75)).toBe(false);
    });

    it('isHarshad(171) ➞ true', () => {
        expect(isHarshad(171)).toBe(true);
    });
    
    it('isHarshad(481) ➞ true', () => {
        expect(isHarshad(481)).toBe(true);
    });

    it('isHarshad(89) ➞ false', () => {
        expect(isHarshad(89)).toBe(false);
    });

    it('isHarshad(516) ➞ true', () => {
        expect(isHarshad(516)).toBe(true)
    });

    it('isHarshad(200) ➞ true', () => {
        expect(isHarshad(200)).toBe(true)
    });

});

xdescribe('isDisarium', () => {

    it('isDisarium(75) ➞ false', () => {
        expect(isDisarium(75)).toBe(false);
    });

    it('isDisarium(135) ➞ true', () => {
        expect(isDisarium(135)).toBe(true);
    });

    it('isDisarium(0) ➞ true', () => {
        expect(isDisarium(0)).toBe(true);
    });

    it('isDisarium(8) ➞ true', () => {
        expect(isDisarium()).toBe(true);
    });

    it('isDisarium(466) ➞ false', () => {
        expect(isDisarium(466)).toBe(false);
    });

});

xdescribe('reverseWords', () => {
    
    it('reverseWords("Hola Mundo") ➞ "olaH odnuM"', () => {
        expect(reverseWords("Hola Mundo")).toBe( "olaH odnuM");
    });

    it('reverseWords("Estudio en SoyHenry, quiero ser fullstack") ➞ "oidutsE ne ,yrneHyoS oreiuq res kcatslluf"', () => {
        expect(reverseWords('Estudio en SoyHenry, quiero ser fullstack')).toBe('oidutsE ne ,yrneHyoS oreiuq res kcatslluf');
    });
    
});