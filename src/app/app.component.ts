import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <h1>Jest Example</h1>
      <span class="spacer"></span>
    </mat-toolbar>
    <app-snapshot [totalImages]="10"></app-snapshot>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jest-example';
}
