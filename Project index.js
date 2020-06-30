///////Attempt #1////////

//Alien vs. Spaceship
/*

class  general {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
/////////////////////////ACTORS////////
//Human
class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = USS Schwarzenegger;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    
//Alien
        class Alien {
        contructor (name, hull, firepower, accuracy) {
        this.name = alien
        this.hull = 20;
        this.firepower = 5;
        this.accuracy =.7;
    }
    }


  attack (Alien) {
      let attackChance = Math.random();
      if(attackChance <= this.accuracy) {
          alien.hull -= this.firepower
        return `${this.name} struck the target!`;
       } else {
           return `${this.name} missed the target.`
       }
  }
}; 

//////////////////ACTION////////////
    attack(Spaceship) {
        let attackChance = Math.random();
        if(attackChance <= this.accuracy) {
            earth.hull -= this.firepower
          return `${this.name} has struck your ship!`;
         } else {
             return `${this.name} has missed your ship!`
         }
    }
};

//console.log(ussSchwartz);
//alien arrays
let alienShips = ['Death Star', 'nova', 'Tartan', 'EbonHawk', 'Ghost', 'Gauntlet Fighter']; //there should be 6 ships - 1 at a time
let alienHullValues = [3, 4, 5, 6]; //hull should be between 3 & 6
let alienFirePower = [2, 3, 4]; //firepower should be between 2 & 4
let alienAccuracy = [.6, .7, .8]; //accuracy should be between .6 & .8
//building alien ships (6 total) with random hull, fire power, and accuracy from arrays
let buildAlienShip = () => {
    //for loop to create 6 ships
    for (let i = 1; i <= 6; i++) {
        //let name = 'Alien Ship' + i ;
        //use math.random to randomly select items in the array
        let name = alienShips[Math.floor(Math.random() * 6)];
        let hull = alienHullValues[Math.floor(Math.random() * 4)];
        let firepower = alienFirePower[Math.floor(Math.random() * 3)];
        let accuracy = alienAccuracy[Math.floor(Math.random() * 3)];
        return alienShips[i] = new Alien (name, hull, firepower, accuracy);
    }
}
console.log(buildAlienShip());

*/


/* Attempt #2
//Make the  Game/Ship Objects
//Make ATTACK functions using math.random
//Make the Alien ship constructor
//Make an Array with the alien ship specifications
//Make a Function that builds the alien ships using the alien array parameters 
//Make a Function for the Spaceship battle
//Use While Loop for Battle function
//Create a Function to check user prompts

//Make the GAME an OBJECT
let game = {
  round: 0,
  targetShip: 0,
  userResponse: "",
};

//MY SHIP becomes an OBJECT
let ussSchwartz = {

  name: "USS Schwartznegger",
  hull: 20,
  firePower: 5,
  accuracy: 0.7,
  attack: function () {
    //This is my attack function using math.random
    let attackChance = Math.random();
    if (attackChance <= this.accuracy) {
      return true;
    } else {
      return false;
    }
  },
};

// CLASS & constructor for Alien Ship
class AlienShip {g
  constructor(name, hull, firePower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firePower = firePower;
    this.accuracy = accuracy;
  }
  attack() {
    //Attack function using math.random
    let attackChance = Math.random();
    if (attackChance <= this.accuracy) {
      return true;
    } else {
      return false;
    }
  }
}

// Alien Arrays-Will Loop through these values to configure ship
let alienShips = []; // alien ships
let alienHullValues = [3, 4, 5, 6]; // alien hull values
let alienFirePowerValues = [2, 3, 4]; // alien fire power values
let alienAccValues = [0.6, 0.7, 0.8]; // alien accuracy values

// Build Alien Ship Function. Create a For loop that uses the arrays above using math.floor & math.random
let createAlienShips = () => {
  for (let i = 0; i < 6; i++) {
    //Iterate 6 values
    let name = "Alien Ship " + (i + 1);
    let hull = alienHullValues[Math.floor(Math.random() * 4)];
    let firePower = alienFirePowerValues[Math.floor(Math.random() * 3)];
    let accuracy = alienAccValues[Math.floor(Math.random() * 3)];
    alienShips[i] = new AlienShip(name, hull, firePower, accuracy); //The result will be a new alien ship with the new parameters
  }
};

// Battle Function=Set up a function that "Holds" the battle

let shipsBattle = (ship1, ship2) => {
  // put the ships into an array
  let ships = [ship1, ship2];
  let attack = false;
  let attacking = 0;
  let beingAttacked = 1;
  let temp;
  console.log("%c Attack Begins ============", "font-size: 30px");
  while (ships[beingAttacked].hull > 0) {
    //While the hull is greater than 0...Keep attacking
    // Attacking Sequence
    if (ships[beingAttacked].hull > 0) {
      // Console log the attack information
      console.log("\n");
      console.log(
        `%c ${ships[attacking].name} attacked ${ships[beingAttacked].name}`,
        "color: purple; border: 1px solid grey; font-size: 18px;"
      );
      // Generate the attack on the enemy ship
      attack = ships[attacking].attack();
      if (attack === true) {
        ships[beingAttacked].hull -= ships[attacking].firePower; //Increase Fire power
        console.log(
          `%c Attack Successful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
          "color: green; font-weight: bold; font-size: 16px;"
        );
      } else {
        console.log(
          `%c Attack Unsuccessful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
          "color: red; font-size: 16px;"
        );
      }
      // Check if the ship being attacked is still alive
      if (ships[beingAttacked].hull <= 0) {
        console.log(
          `%c ${ships[beingAttacked].name} has been destroyed`,
          "color: red; border: 1px solid grey; font-size: 16px;"
        );
        if (ships[beingAttacked] === ussSchwartz) {
          ///If the USS SHip is being attaced and is destroyed THEN alert player Game is Over
          alert("Game Over!!!");
        } else if (
          ships[beingAttacked].name === alienShips[alienShips.length - 1].name
        ) {
          alert(
            `%c ${ships[beingAttacked].name} destroyed!\nAlien fleet has been destroyed!\nyou have been victorious`,
            "color: green;"
          );
        } //If USS destroys alien fleet, then alert player of victory
        else {
          game.userResponse = prompt(
            `${alienShips[game.targetShip].name} destroyed!!\n${
              ussSchwartz.name
            } Hull: ${
              ussSchwartz.hull
            }\nWould you like to ATTACK the next ship or RETREAT from battle?`,
            ""
          );
          game.targetShip += 1; //PROMPT PLAYER IF THEY WNAT TO CONTINUE OR RETREAT
          checkUserPrompt();
          return;
        }
      } else {
        // Switch the attacking/attacked ships
        temp = attacking;
        attacking = beingAttacked;
        beingAttacked = temp;
      }
    }
  }
};
// Function to check user prompts
let checkUserPrompt = () => {
  let responseUpperCase = game.userResponse.toUpperCase();
  if (responseUpperCase === "ATTACK") {
    shipsBattle(ussSchwartz, alienShips[game.targetShip]);
  } else if (responseUpperCase === "RETREAT") {
    alert("Game Over! You Live to Fight Again Another Day.");
  }
};

let startGame = () => {
  // Build alien fleets
  createAlienShips();

  game.userResponse = prompt(
    "Alien fleet approaching\nWould you like to ATTACK the first ship or RETREAT?",
    ""
  );
  checkUserPrompt();
};

// Initialize game 
start game (); */