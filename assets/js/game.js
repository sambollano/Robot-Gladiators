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
    var enemy = {
    name: "Roborto",
    attack: randomNumber(10, 14),
    shield: {
    type: "wood",
    strength: 10
    }
    };
    playerInfo.health = playerInfo.health + 20;
    playerInfo.money = playerInfo.money - 7;
// fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
// the player is still alive, keep fighting
    if (playerInfo.Health > 0) {
// let user know what round they are in, remember that arrays start at 0
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    debugger;
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
        window.alert("The game has now ended. Let's see how you did!");
      
        // check localStorage for high score, if it's not there, use 0
        var highScore = localStorage.getItem("highscore");
        if (highScore === null) {
          highScore = 0;
        }
        // if player have more money than the high score, player has new high score!
        if (playerInfo.money > highScore) {
          localStorage.setItem("highscore", playerInfo.money);
          localStorage.setItem("name", playerInfo.name);
      
          alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
        } 
        else {
          alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
        }
      
        // ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");
      
        if (playAgainConfirm) {
          startGame();
        } 
        else {
          window.alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
      };
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
    }
// if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerInfo.Name + " has decided to skip this fight. Goodbye!");
    }
// subtract money from playerMoney for skipping
    playerInfo.Money = Math.max(0, playerInfo.Money - 10);
    console.log("playerMoney", playerInfo.Money)
    }
// if no (false), ask question again by running fight() again
    for(var i = 0; i < enemyInfo.length; i++); {
        var fight = function(enemy) {
            // keep track of who goes first
            var isPlayerTurn = true;
          ​
            // randomly change turn order
            if (Math.random() > 0.5) {
              isPlayerTurn = false;
            }
          ​
            while (playerInfo.health > 0 && enemy.health > 0) {
              if (isPlayerTurn) {
                // ask player if they'd like to fight or skip using fightOrSkip function
                if (fightOrSkip()) {
                  // if true, leave fight by breaking loop
                  break;
                }
          ​
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
          ​
                // remove enemy's health by subtracting the amount we set in the damage variable
                enemy.health = Math.max(0, enemy.health - damage);
                console.log(
                  playerInfo.name +
                    " attacked " +
                    enemy.name +
                    ". " +
                    enemy.name +
                    " now has " +
                    enemy.health +
                    " health remaining."
                );
          ​
                // check enemy's health
                if (enemy.health <= 0) {
                  window.alert(enemy.name + " has died!");
          ​
                  // award player money for winning
                  playerInfo.money = playerInfo.money + 20;
          ​
                  // leave while() loop since enemy is dead
                  break;
                } else {
                  window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
                // player gets attacked first
              } else {
                var damage = randomNumber(enemy.attack - 3, enemy.attack);
          ​
                // remove player's health by subtracting the amount we set in the damage variable
                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log(
                  enemy.name +
                    " attacked " +
                    playerInfo.name +
                    ". " +
                    playerInfo.name +
                    " now has " +
                    playerInfo.health +
                    " health remaining."
                );
          ​
                // check player's health
                if (playerInfo.health <= 0) {
                  window.alert(playerInfo.name + " has died!");
                  // leave while() loop if player is dead
                  break;
                } else {
                  window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
                }
              }
              // switch turn order for next round
              isPlayerTurn = !isPlayerTurn;
            }
          };
          localStorage.setItem("color", "red");
          localStorage.getItem("color");
// function to generate a random numeric value
    var randomNumber = function() {
    var value = Math.floor(Math.random() * (21)) + 40;
    return value;
    };
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
    }}