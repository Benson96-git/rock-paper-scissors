import { Component } from '@angular/core';

@Component({
  selector: 'app-rcpgame',
  templateUrl: './rcpgame.component.html',
  styleUrl: './rcpgame.component.scss'
})
export class RcpgameComponent {
  userChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  play(userMove: string) {
    this.userChoice = userMove;
    this.computerChoice = this.getComputerChoice();
    this.result = this.determineWinner(this.userChoice, this.computerChoice);
  }

  getComputerChoice(): string {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  determineWinner(user: string, computer: string): string {
    if (user === computer) {
      return "It's a tie!";
    }
    if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
}
