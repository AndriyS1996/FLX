/* Write your code here */

function assign(target){
    let newObject = Object(target);
    for (let i = 1; i < arguments.length; i++) {
        let nextObject = arguments[i];
        for (const key in nextObject) {
            if (nextObject.hasOwnProperty(key)) {
                newObject[key] = nextObject[key];
            }
        }
    }
    return newObject
}

let defaults = { a: 123, b: 777 };
let options = { a: 456 };
let configs = assign({}, defaults, options); // {a: 456, b: 777}
console.log(configs);

// Task2


function Bot(botData){
    this.name = botData.name;
    this.speed = botData.speed;
    this.x = botData.x;
    this.y = botData.y;
    this.defaultSpeed = botData.speed;
}

Bot.prototype.getSpeed = function(){
    return this.speed
}
Bot.prototype.setSpeed = function(newSpeed){
    this.speed = newSpeed;
}
Bot.prototype.getDefaultSpeed = function(){
    return this.defaultSpeed;
}
Bot.prototype.getCoordinates = function(){
    return { 'x' : this.x, 'y' : this.y}
}
Bot.prototype.setCoordinates = function(x, y){
    this.x = x;
    this.y = y;
}
Bot.prototype.moveWithSpeed = function(direction, speed){
    switch (direction) {
        case 'up':
            this.y += speed;
            break;
        case 'down':
            this.y -= speed;
            break;
        case 'left':
            this.x -= speed;
            break;
        case 'right':
            this.x += speed;
            break;
        default:
            console.log("Incorrect inputed direction, input 'up', 'down', 'left' or 'right'");
            break;
    }
}

Bot.prototype.move = function(direction){
    this.moveWithSpeed(direction, this.speed);
}

Bot.prototype.showPosition = function(){
    console.log(`I am Bot ${this.name}. I am located at ${this.x}:${this.y}.`)
}


//Racebot

function Racebot(RacebotData){
    Bot.call(this, RacebotData);
    this.previousMove;
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = 'Racebot';

Racebot.prototype.move = function(direction){
    if (direction === this.previousMove){
        this.speed += 1;
        this.moveWithSpeed(direction, this.speed)
    } else {
        this.speed = this.defaultSpeed;
        this.moveWithSpeed(direction, this.speed);
    }
    this.previousMove = direction;
}

//Speedbot


function Speedbot(SpeedBotData){
    Bot.call(this, SpeedBotData);
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = 'Speedbot';

Speedbot.prototype.prepareEngine = function(){
    this.speed += 2;
}

Speedbot.prototype.move = function(direction){
    if (this.defaultSpeed < this.speed){
        this.moveWithSpeed(direction, this.speed);
        this.speed--;
        return
    }
    if (this.defaultSpeed === this.speed){
        this.moveWithSpeed(direction, this.speed);
    }
}

//Invocation examples

let Botty = new Bot({name: 'Betty', speed: 2, x: 0, y: 1});
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.
console.log(Botty.getDefaultSpeed())
console.log(Botty.getCoordinates())

let Zoom = new Racebot({name: 'Lightning', speed: 2, x: 0, y: 1});
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
Zoom.move('left');
Zoom.move('down');
Zoom.move('up');
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
Zoom.move('up');
Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.

console.log(Zoom.getDefaultSpeed());
console.log(Zoom.getCoordinates());

let Broom = new Speedbot({name: 'Thunder', speed: 2, x: 0, y: 1});
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
Broom.prepareEngine();
Broom.move('left');
Broom.move('down');
Broom.move('up');
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
Broom.move('up');
Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.

console.log(Broom.getDefaultSpeed());
console.log(Broom.getCoordinates());