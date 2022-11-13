import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly SOUND_INTERVAL = 900;
  private readonly BUTTON_INTERVAL = 1000;
  private correctGuesses = 5;
  title = 'SimonGame';

  private setBtnActive(classes: any) {
    classes.add('active');
    setTimeout(() => {
      classes.remove('active');
    }, this.SOUND_INTERVAL);
  }

  private playSounds(classes: any) {
    switch (classes[1]) {
      case 'green':
        const audio_c = new Audio('../assets/sounds/c.mp3');
        audio_c.play();
        break;
      case 'red':
        const audio_d = new Audio('../assets/sounds/d.mp3');
        audio_d.play();
        break;
      case 'yellow':
        const audio_e = new Audio('../assets/sounds/e.mp3');
        audio_e.play();
        break;
      case 'blue':
        const audio_g = new Audio('../assets/sounds/g.mp3');
        audio_g.play();
        break;
    }
  }

  public simonClick(target: any): void {
    const classes = target.classList;
    this.setBtnActive(classes);
    this.playSounds(classes);
  }

  public startGame(): void {
    const green = document.getElementsByClassName('green')[0];
    const red = document.getElementsByClassName('red')[0];
    const yellow = document.getElementsByClassName('yellow')[0];
    const blue = document.getElementsByClassName('blue')[0];
    const colors = [green, red, yellow, blue];
    const nextSequence = this.correctGuesses + 1;
    for (let i = 1; i <= nextSequence; i++) {
      const randomColor = Math.floor(Math.random() * 4);
      setTimeout(() => {
        this.simonClick(colors[randomColor]);
      }, this.BUTTON_INTERVAL * i);
    }
  }
}
