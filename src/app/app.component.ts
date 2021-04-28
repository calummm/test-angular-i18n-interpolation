import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  readonly firstTest = '1';
  readonly secondTest = '2';
  readonly thirdTest = 3;
  readonly forthTest = 4;
}
