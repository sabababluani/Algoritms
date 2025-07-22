# 🦾 Robot Coordinates Tracker

This project provides a simple function to track the final coordinates of a robot based on a series of movement instructions.

## 📌 Problem Description

You need to implement a function called `trackRobot(movements)` that takes an array of numbers as an argument. Each number represents how many steps the robot should move in a specific direction.

The robot:

- Starts at coordinate `(0, 0)`
- Begins by facing **North**
- After each move, it **rotates 90 degrees clockwise**
  - 1st move → North (positive Y-axis)
  - 2nd move → East (positive X-axis)
  - 3rd move → South (negative Y-axis)
  - 4th move → West (negative X-axis)
  - Then the cycle repeats...

Your task is to return the final `[x, y]` coordinates after processing all movements.

### 🔁 Function Signature

```javascript
function trackRobot(movements: number[]): [number, number]
```

💡 Example

Input:

```javascript
trackRobot([20, 30, 10, 40]);
```

Explanation of each movement:

    North: Moves 20 units → (0, 20)

    East: Moves 30 units → (30, 20)

    South: Moves 10 units → (30, 10)

    West: Moves 40 units → (-10, 10)

Output:

```javascript
[-10, 10];
```

✅ Goal

Write a function that calculates and returns the robot's final position as an array [x, y].
🧠 Tip

    Use a loop and direction indexing (modulo 4) to determine which axis to update at each step.


