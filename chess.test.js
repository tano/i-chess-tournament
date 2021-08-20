const {splitIntoGroups, createBattles, arrangeTournament} = require("./chess");

describe('splitting into groups', function () {
    it('[happy path] should split 6 participants into two groups by 3 members', function () {
        // given
        const participants = ['Alex', 'Maxim', 'Dima', 'Anton', 'Kamil', 'Fedor']

        // when
        const groups = splitIntoGroups(participants);

        // then
        expect(groups).toHaveLength(2)
        // 1. TODO: implement more assertions to check whether splitIntoGroups function works correctly
    });
    // 2. TODO: implement more tests (including corner cases)
});

describe('creating battles schedule', function () {
    it('[happy path] should create battle schedule as an array of key-value pairs where each pair represents battle', function () {
        // given
        const groupA = ['Alex', 'Maxim', 'Dima']
        const groupB = ['Anton', 'Kamil', 'Fedor']

        // when
        const battles = createBattles([groupA, groupB])

        // then
        expect(battles).toHaveLength(12)
        // 3. TODO: implement more assertions to check whether createBattles function works correctly
    });
    // 4. TODO: implement more tests (including corner cases)
});

describe('manual test', function () {
    // given
    const participants = ['Alex', 'Maxim', 'Dima', 'Anton', 'Kamil', 'Fedor']

    // when
    arrangeTournament(participants)
});