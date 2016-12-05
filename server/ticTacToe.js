'use strict';
class TicTacToe {
  constructor() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.playing = false;
  }
  drawBoard() {
    console.log(this.board);
  }
  playGame() {
    
  }
}

export { TicTacToe };