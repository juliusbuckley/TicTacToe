'use strict';
class TicTacToe {
  constructor() {
    this.board = [
      ['X', ' ', 'O'],
      ['O', 'X', ' '],
      ['O', ' ', 'X']
    ];
    this.playing = false;
  }
  drawBoard() {
    // draw board 
    console.log(`| ${this.board[0][0]} | ${this.board[0][1]} | ${this.board[0][2]} |`);
    console.log(`| ${this.board[1][0]} | ${this.board[1][1]} | ${this.board[1][2]} |`);
    console.log(`| ${this.board[2][0]} | ${this.board[2][1]} | ${this.board[2][2]} |`);
  }
  playGame() {
    // add player logic
  }
  checkWin() {
    // check for win
  }
}

export { TicTacToe };