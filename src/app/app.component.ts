import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  readonly firstTest = '1';
  readonly secondTest = '2';
  readonly thirdTest = 3;
  readonly forthTest = 4;
}
