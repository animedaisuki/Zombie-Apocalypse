var number = 1;
var cList = [];
var zList = [];
var zListCopy = [];

var input = {"gridSize": 4,
    "zombie": {"x": 3, "y": 1},
    "creatures": [{"x":0, "y":1},{"x":1, "y":2},{"x":1, "y":1}],
    "commands":"RDRU"}

var gridSize = input.gridSize;
var zPosX = input.zombie.x;
var zPosY = input.zombie.y;
var creatures = input.creatures;
var commands = input.commands;


class World {
    constructor(gridSize) {
        this.gridSize = gridSize;
    }

    getGridSize() {
        return this.gridSize;
    }

    getSquare() {
        return this.gridSize * this.gridSize;
    }
}

class Zombie {
    constructor(x, y, gridSize, name) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.gridSize = gridSize;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    move(direction) {
        var moveDirection = {"R":{x: this.x + 1, y: this.y},
            "L":{x: this.x - 1, y: this.y},
            "D":{x: this.x, y: this.y + 1},
            "U": {x: this.x, y: this.y - 1}}
        this.x = moveDirection[direction]["x"] % gridSize
        this.y = moveDirection[direction]["y"] % gridSize
        console.log("zombie " + this.name + " moved to " + "(" + this.x + "," + this.y + ")");
    }

    getName() {
        return this.name;
    }
}

class Creature {
    constructor(x, y, gridSize, isInfected) {
        this.x = x;
        this.y = y;
        this.gridSize = gridSize;
        this.isInfected = false;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    infected(zName) {
        if (this.isInfected === false) {
            var newZombie = new Zombie(this.x, this.y, this.gridSize, number);
            zList.push(newZombie);
            zListCopy.push(newZombie);
            this.isInfected = true;
            console.log ("zombie " + zName + " infected creature at" + "(" + this.x + "," + this.y + ")");
            number++;
        }
    }

    getIsInfected() {
        return this.isInfected;
    }
}

function checkCollision(zX, zY, zombieName) {
    for (var singleCreature of cList) {
        if (zX === singleCreature.getX() && zY === singleCreature.getY()){
            singleCreature.infected(zombieName);
        }
    }
}

function readInput(input) {
    for (var i = 0; i < creatures.length; i++) {
        var cPosX = creatures[i].x;
        var cPosY = creatures[i].y;
        cList[i] = new Creature(cPosX, cPosY, gridSize);
    }

    var zombie = new Zombie(zPosX, zPosY, gridSize, 0);
    zList.push(zombie);
    zListCopy.push(zombie);

    while (zList.length !== 0) {
        for (var p = 0; p < commands.length; p++) {
            zList[0].move(commands[p]);
            let zX = zList[0].getX();
            let zY = zList[0].getY();
            let tempName = zList[0].getName();
            checkCollision(zX,zY, tempName);
        }
        zList.shift();
    }

    var zombieResults = [];
    for (sigZombie of zListCopy) {
        zombieResults.push({"x": sigZombie.getX(), "y": sigZombie.getY()})
    }

    var creatureResults = [];
    for (sigCreature of cList){
        if (sigCreature.getIsInfected() === false){
            creatureResults.push({"x": sigCreature.getX(), "y": sigCreature.getY()})
        }
    }

    var output = {"zombie": zombieResults,
        "creatures": creatureResults};

    console.log(output);
}

readInput(input);