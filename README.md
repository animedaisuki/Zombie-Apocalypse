# **Overview**
This JavaScript program simulates a zombie apocalypse on a 2D grid. Initially, the grid contains some creatures and a single zombie. The zombie moves based on a series of commands (Left, Right, Up, Down) and infects any creature it encounters. Once a creature is infected, it becomes a new zombie and begins to move in the same pattern as the initial zombie. The simulation outputs the positions of all remaining creatures and zombies at the end.

# **Classes**
World
Manages the grid world on which the creatures and zombies exist.
Zombie
Keeps track of the zombie's current position.
Executes moves based on given commands.
Creature
Keeps track of the creature's current position.
Can be infected by a zombie, converting it into a new zombie.
Functions
checkCollision
Checks if a zombie has collided with any creature based on their coordinates.
readInput
Reads the input JSON, initializes creatures and zombies, and then runs the simulation.


# **Getting Started**
Clone the repository.

Open the JavaScript file in your text editor or IDE.

To run the simulation, you can either:
Use Node.js to execute the file in a terminal.

```bash
node zombieApocalypse.js
```

# **Example Input**
The input is given as a JSON object containing:

gridSize: The size of the grid world.
zombie: The initial position of the first zombie.
creatures: An array of creature positions.
commands: A string of movement commands for the zombie(s).

# **Output**
The output will be displayed in the console, showing the positions of zombies and remaining creatures.

# **License**
MIT
