// split participants into groups, each group should have equal amount of members
function splitIntoGroups(participants) {
    return []
}

// create battles schedule, each group member must have two battles with remaining members of the groups
function createBattles(groups) {
    return []
}

// put everything together and print out the battles
function arrangeTournament(participants) {
    const groups = splitIntoGroups(participants);
    const battles = createBattles(groups)
    console.log(battles)
}
// TODO: implement this
module.exports = {splitIntoGroups, createBattles, arrangeTournament}