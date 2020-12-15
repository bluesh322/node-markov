const {MarkovMachine} = require('./markov');

describe('markov machine tests', function (){
    test('check if mm chains has null', function () {
        let mm = new MarkovMachine("the cat in the hat");

        expect(mm.chains.get('hat')).toEqual([null])
    });

    // test('check MakeText has equal to or fewer words than set', function () {

    // });
});