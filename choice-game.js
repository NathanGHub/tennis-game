var beginningScenarios = ["You wake up in a hospital. It's eerily quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods.", "You just got off the bus and are going home. When you get home you realize that nobody's home."];
function randomNumber(range) {
  return Math.round(Math.random() * range)
}
alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);
var weapons = prompt("What weapon do you see?").toLowerCase();
alert("Realizing that the zombie apocalypse has already started, you decide to search for a weapon just in case a zombie might appear. After surveying your surroundings you notice a " + weapons + " and grab it.");
alert("You then sense something weird, something inhuman. Then appears a zombie, you prepare your " + weapons + " and advance towards the zombie.");
var attackingPlace= prompt("You are about to strike the zombie, where do you want to strike the zombie?").toLowerCase();
var survival = randomNumber(2);
if (survival === 0) {
  alert("The zombie strikes you and your to slow to block or dodge it with your " + weapons + " and he bities you. You lose!!");
} else if (survival > 0) {
  alert("You attack the zombie in the " + attackingPlace + ", you are able to hit the zombie with your " + weapons + " and he falls down. You killed the zombie, You WIN!!!");
}
