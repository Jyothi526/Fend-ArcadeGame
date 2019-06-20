# Classic Arcade Game Clone Project.
+ The arcade game is such an interesting and creative game.
+ I learned a lot of things in this game and how to rectify the errors.
+ And I learned the Document Object Modeling(DOM) and how to create a content in JavaScript.
## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
------------------
## Cloning the Project
### The following lines are the steps how I completed this project.
+ Initially , I read all the instructions and I got the GitHub link as a skeleton project which was provided by **Udacity** .
+ The project is in rubric structure.
+ I downloaded the zip file in GitHub and I extracted the zip file into a new folder.
+ In that extracted file , I saw the following sub files.
1. `index.html`
2. In `js` folder , I found these files.
   - `app.js`
   - `engine.js`
   - `resources.js`
3. In `css` folder, I found the following file.
   - `style.css`
4. `README.md`
5. In `images` folder , I found some images which are helpful to run the project.
### The changes made from the given project.
+ Initially, I opened the `index.html` file and run the project in the browser.
+ I got a white page without doing any changes in the browser.
+ I found few errors from google developer console. To solve those errors, I initialized an array named as `allEnemies[]` and I initialized a class namely `Actor` and `player`.
+ I implemented the following functions for the `player` class.
  - render()
  - update() and
  - handleInput()
+ render(): It is for placing a player sprite into the canvas.
+ update(): For updating the player positions.
+ handleInput(): It is to handle the inputs that was implemented by the user. As the inputs are already given. Based on that, I gave the following inputs in a switch method. They are.
  - left : If we click the left button , it moves the actor to the left direction in x-axis. It moves upto the actor goes to the left corner and again it won't works.
  - right : If we click the right button , it moves the actor to the right direction in x-axis. It moves upto the actor goes to the right corner and again it won't works.
  - up : It moves upward in y-axis. And when it reaches the `water-block.png` image, it will come to the initial position.
  - down : It moves downward in y-axis. It will come upto down most position.
+ The score is displayed in the top of the game area and the score is given by using span.
+ The stars images are also fixed beside the score area.
## How to play the game.
+ Initially, the actor is placed in fixed position and we can name it as initial position.
+ We can move the actor based  on the respective buttons.
+ The enemies(bugs) are keep on going randomly in the game area.
+ If the actor(player) reaches or touches the water area then the score will increase by one point.
+ If the score is 2, then the actor will win one star.
+ If the score is 4, then the actor will win two stars.
+ If the score is 8, then the actor will win three stars.
+ And if the enemy touches the actor , then the game is over and a pop-up message is displayed.
+ For displaying the pop-up message, I used a `sweetalert2` function.
+ Finally the game is completed.
+ If the player want to play again, click on the restart button that was displayed in pop-up message.
