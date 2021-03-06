import { Component } from '@angular/core';
import { AppConfig } from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(config: AppConfig) {
    // will always be false
    console.log('From DI', config);
  }
}
