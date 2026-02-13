var realMadrid = 11;
var barcelona = 11;
//let cristiano: boolean = false;
var messi = true;
function playMatch(team1, team2, messi) {
    var reason = "";
    if (messi) {
        team2 += 1;
        reason = "Messi is playing for Barcelona.";
    }
    if (team1 > team2) {
        console.log("Real Madrid wins!");
    }
    else if (team1 < team2) {
        console.log("Barcelona wins!");
    }
    else {
        console.log("It's a draw!");
    }
}
playMatch(realMadrid, barcelona, messi);
