import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nfl-frontend';
  redBlue = anime({
    targets: 'button',
    translateX: 500,
    rotate: '3turn',
    duration: 100
  });
  ngOnInit() {
   console.log();
  }
  ngAfterViewInit(){
    anime({
      targets: 'button',
      translateX: 550,
      rotate: '3turn',
      duration: 10000
    });
  }

}
