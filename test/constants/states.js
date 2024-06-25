const States = Object.freeze({
  CONNECTING: 'Connecting to server.',
  YOUR_TURN: 'Your turn.',
  START_YOUR_TURN: 'The game started, your turn.',
  OPPONENT_TURN: "Opponent's turn, please wait.",
  START_OPPONENT_TURN: "The game began, opponent's turn.",
  WAIT_FOR_OPPONENT: 'Waiting for opponent.',
  OPPONENT_LEFT_GAME: 'Your opponent has left the game.',
  GAME_WON: 'Game over. Congratulations, you won!',
  GAME_LOST: 'Game over. You lose.',
  ERROR: 'Unexpected error. Further play is impossible.',
})
export default States
