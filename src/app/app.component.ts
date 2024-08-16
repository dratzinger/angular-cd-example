import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CdWrapperComponent } from './cd-wrapper/cd-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-cd-example';
}
