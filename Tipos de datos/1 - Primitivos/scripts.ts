let realMadrid: number = 11;
let barcelona: number = 11;

//let cristiano: boolean = false;
let messi: boolean = true;

function playMatch(team1: number, team2: number, messi: boolean): void {
 let reason: string = ""
 if (messi) {
  team2 += 1;
  reason = "Messi is playing for Barcelona.";
 }
 if (team1 > team2) {
  console.log("Real Madrid wins!");
 } else if (team1 < team2) {
  console.log("Barcelona wins!");
 } else {
  console.log("It's a draw!");
 }
}
playMatch(realMadrid, barcelona, messi);