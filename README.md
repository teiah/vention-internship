# Game Algorithm

## `play()`

- Checks the game status (notification text)
- If it's my turn, the active battlefield is scanned to get its current state
- The best cell to be attacked is found and clicked
- Game status is checked again
- If the status becomes game lost, game won, error, or opponent left - the game ends.
- Returns the game status

## `handleGameEnd()`

- If the game ends in 'loss', 'error' or 'opponent left', corresponding log error is output.

## `getBattlefieldState()`

- Goes through each cell element of the battlefield
- Returns an array that includes the state of each cell - empty, hit, miss

## `getBestCell()`

- Uses the result from getBattlefieldState()
- Calls `rateCell()` and gives an empty cell a rating (score)
- Compares the rating and the best rating so far and saves it in an array
- Returns a random cell (x,y) from the array with best ratings

## `rateCell()`

- An empty cell gets a score +1 point
- Checks if the cells next to it (up, down, left, right) are a 'hit' cell. If there is +1 point.
- Returns the score

## `attack()`

- Finds the cell with corresponding x,y coordinates and clicks it if it's clickable
