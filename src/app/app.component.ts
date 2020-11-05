import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webcomponents-consumer';

  webComponentHandleEvent(event: string): void {
    console.log(event);
  }

  fdValueHandleEvent(event: string): void {
    console.log(event);
  }
}
