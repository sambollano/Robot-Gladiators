
    // fight();  
    var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
    this.health = 100;
    this.money = 10;
    his.attack = 10;
    }, // comma!
    refillHealth: function() {
    this.health += 20;
    this.money -= 7;
    }, // comma!
    refillHealth: function() {
    if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
    } 
    else {
    window.alert("You don't have enough money!");
    }
    },
    upgradeAttack: function() {
    if (this.money >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
    } 
    else {
    window.alert("You don't have enough money!");
    }
    }
    };
    var enemyInfo = [
    {
    name: "Roborto",
    attack: randomNumber(10, 14)
    },
    {
    name: "Amy Android",
    attack: randomNumber(10, 14)
    },
    {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
    }
    ]
// function to start a new game
    var startGame = function() {
// reset player stats
    playerInfo.reset();
    playerInfo.Health = 100;
    playerInfo.Attack = 10;
    playerInfo.Money = 10;
    // in shop()
    playerInfo.health = playerInfo.health + 20;
    playerInfo.money = playerInfo.money - 7;
// fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
// the player is still alive, keep fighting
    if (playerInfo.Health > 0) {
// let user know what round they are in, remember that arrays start at 0
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

// Pick new enemy to fight based on the index of the enemy.Names array
    var pickedEnemyObj = enemyInfo[i];
// reset enemy.Health before starting a fight
    enemy.Health = Math.floor(Math.random() * 21) + 40;
    fight(pickedEnemyObj);
    }
    else {
    window.alert("You have lost your robot in battle! Game Over!");
    }
    var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.Health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.Money + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
// restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
    }

// ask the player if they'd liked to fight or run
    var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
// if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
// remove enemy's health by subtracting the amount set in the playerAttack variable
    enemy.Health = Math.max(0, enemy.Health - playerInfo.Attack);
    console.log(
    playerInfo.Name + " attacked " + enemy.Names + ". " + enemy.Names + " now has " + enemy.Health + " health remaining."
    );
// check enemy's health
    if (enemy.Health <= 0) {
    window.alert(enemy.Names + " has died!");

    } 
    else {
    window.alert(enemy.Names + " still has " + enemy.Health + " health left.");
    }
// remove player's health by subtracting the amount set in the enemy.Attack variable
    playerInfo.Health = Math.max(0, playerInfo.Health - playerInfo.Attack);
    console.log(
    enemy.Names + " attacked " + playerInfo.Name + ". " + playerInfo.Name + " now has " + playerInfo.Health + " health remaining."
    );
    var damage = randomNumber(enemy.Attack - 3, enemy.Attack);
playerInfo.Health = Math.max(0, playerInfo.Health - damage);
    }
// check player's health
    if (playerHealth <= 0) {
    window.alert(playerInfo.Name + " has died!");
    } 
    else {
    window.alert(playerInfo.Name + " still has " + playerInfo.Health + " health left.");
    } 
// if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
// confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

// if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
// subtract money from playerMoney for skipping
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney)
// if no (false), ask question again by running fight() again
    for(var i = 0; i < enemyNames.length; i++); {
    fight(pickedEnemyName); 
    }
    }
    }}
    var endGame = function() {
// if player is still alive, player wins!
    if (playerHealth > 0 && i < enemyNames.length - 1) {
    var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
// if yes, take them to the store() function
    if (storeConfirm) {
    shop();
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    }
    else {
    window.alert("You've lost your robot in battle.");
    }
// ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
// restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }}
    var shop = function() {
// ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    };
    if (shopOptionPrompt === "refill" || shopOptionPrompt === "REFILL") {
    }
// use switch to carry out action
    switch (shopOptionPrompt) {
    case "REFILL": // new case
    case "refill":
    if (playerMoney >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    }
    else {
    window.alert("You don't have enough money!");
    }
  
    break;
    case "UPGRADE": // new case
    case "upgrade":
    if (playerMoney >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
    }
    else {
    window.alert("You don't have enough money!");
    }
    break;
    case "LEAVE": // new case
    case "leave":
    window.alert("Leaving the store.");
    break;
    default:
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
    }