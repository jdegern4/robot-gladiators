var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    console.log(enemyNames[0]);
    console.log(enemyNames[1]);
    console.log(enemyNames[2]);
    for(var i = 0; i < enemyNames.length; i++) {
    }
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

    // Check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // IF PLAYER CHOOSES TO SKIP
} if (promptFight === "skip" || promptFight === "SKIP") {
    // CONFIRM PLAYER WANTS TO SKIP
    var confirmSkip = window.confirm("Are you sure you want to quit?")

    // IF YES (TRUE), LEAVE FIGHT
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip this fight!");
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
    }
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    
}