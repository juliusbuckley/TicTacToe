import express from 'express';
import readline from 'readline';
import { TicTacToe } from './ticTacToe';

const app = express();
const port = 8080;
const newGame = new TicTacToe();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Tic Tac Toe! Would you like to start a new game? (y/n) ', (resp) => {
  if (resp === 'n' || resp === 'no') {
    console.log('Hope to see you again! (exit: ctrl + c)');
    rl.close();
  } else if (resp === 'y' || resp === 'yes') {
    // draw board
    newGame.drawBoard();
  }
});
// app.listen(() => { console.log(`app.js has been served on port: ${port}`); });
