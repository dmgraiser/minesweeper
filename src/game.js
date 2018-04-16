// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// Mark bomb locations like so:
// game.markBomb(2,1);
// Unmark marked bomb locations like so:
// game.unMarkBomb(2,1);
// When done run `.exit`

import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    this._numberOfMarkedTiles = 0;
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over!');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('You win!!');
      this._board.print();
    } else {
      console.log('Current Board:');
      this._board.print();
    }
  }

  markBomb(rowIndex, columnIndex) {
    if (this._board.playerBoard[rowIndex][columnIndex] === ' ') {
      this._board.playerBoard[rowIndex][columnIndex] = 'X';
      this._board.print();
      this._board._numberOfMarkedTiles++;
    } else if (this._board.playerBoard[rowIndex][columnIndex] === 'X'){
      console.log('This tile has already been marked');
    } else {
      console.log('This tile has already been flipped');
    }
  }
  unMarkBomb(rowIndex, columnIndex) {
    if (this._board.playerBoard[rowIndex][columnIndex] !== 'X') {
      this._board.playerBoard[rowIndex][columnIndex] = ' ';
      this._board.print();
      this._numberOfMarkedTiles--;
    } else {
      console.log('There is no marker her to un-mark');
    }
  }
}
