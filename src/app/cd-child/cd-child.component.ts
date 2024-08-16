import {
  AfterViewChecked,
  Attribute,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { interval } from 'rxjs';
import { CdTrackComponent } from '../cd-track/cd-track.component';

@Component({
  selector: 'app-cd-child',
  standalone: true,
  imports: [],
  template: `
    <header>
      <span>Branch: {{ branch }}</span>
      <span><ng-content /></span>
      <span>CD Changes: {{ cdChanges }}</span>
      <span>CD Checks: {{ cdChecked }}</span>
      <button (click)="counter = counter + 1">clicks {{ counter }}</button>
    </header>

    <main>
      @for (no of indices; track $index) {
        <app-cd-child [branch]="branch">Child: {{ no }}</app-cd-child>
      }
    </main>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 255, 0.1);
      min-width: 10vw;
      align-items: center;
      padding: 1em;
      border: 1px solid lightgrey;
    }

    main {
      flex-direction: column;
    }
  `,
})
export class CdChildComponent extends CdTrackComponent {
  @Input() branch = '';

  @Input() set recursions(number: number) {
    this.indices = Array.from(Array(number).keys());
  }
  indices: number[] = [];

  counter = 0;

  constructor() {
    super();
  }
}
