// Enemies our player must avoid
let scr = 0;
var child = document.getElementsByClassName("fa-star")
var childList = [...child];
var scrSec = document.getElementById("scr");
var Bug = function(x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	this.x = x;
	this.y = y;
	this.speed = speed;
	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Bug.prototype.update = function(dt) {
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
	this.x = this.x + this.speed * dt;
	if (this.x == 0) this.speed = 100 + Math.floor(Math.random() * 400);
	if (this.x > 500) {
		this.speed = 100 + Math.floor(Math.random() * 400);
		this.x = 0;
	}
	if (player.x < this.x + 60 && player.x + 60 > this.x && player.y < this.y + 80 && player.y + 80 > this.y) {
		childList.forEach(function(item) {
			item.style.color = "#c0c0c0";
			item.style.textShadow = "2px 2px 2px #000";
		})
		// sweet alert function for pop-up message
		Swal.fire({
			title: "Game over!!",
			html: "Play again",
			confirmButtonText: '<i class="fa fa-thumbs-up"></i> Restart',
		}).then(() => {
			document.location.reload();
		});
		player.x = 200;
		player.y = 410;
		scr = 0;
		scrSec.innerHTML = scr;
	}
};
// Draw the enemy on the screen, required method for game
Bug.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Actor {
	constructor(x, y, sprite) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/char-princess-girl.png';
	}
}
Actor.prototype.update = function(dt) {}
Actor.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var bugLocations = [62, 145, 228];
bugLocations.map((positionY) => {
	var bugItem = new Bug(0, positionY, 210);
	allEnemies.push(bugItem);
})
var player = new Actor(200, 410);
// Adding a new function handleInput by using prototype method
Actor.prototype.handleInput = function(key) {
	//Giving directions to respective keys
	switch (key) {
		case "left":
			this.x = this.x - 101;
			if (this.x < 0) this.x = 0;
			break;
		case "right":
			this.x = this.x + 101;
			if (this.x > 404) this.x = 404;
			break;
		case "up":
			this.y = this.y - 84;
			if (this.y < 0) {
				scr = scr + 1;
				scrSec.innerHTML = scr;
				starDisplay();
				setTimeout(() => {
					this.x = 200;
					this.y = 410;
				}, 100)
			}
			break;
		case "down":
			this.y = this.y + 84;
			if (this.y > 410) this.y = 410;
	}
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});

function starDisplay() {
	if (scr == 2) {
		childList[0].style.color = "#ffd700";
		childList[0].style.textShadow = "2px 2px 2px #db1a1a";
	}
	if (scr == 4) {
		childList[1].style.color = "#ffd700";
		childList[1].style.textShadow = "2px 2px 2px #db1a1a";
	}
	if (scr == 8) {
		childList[2].style.color = "#ffd700";
		childList[2].style.textShadow = "2px 2px 2px #db1a1a";
	}
};
