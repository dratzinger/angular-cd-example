import {
  AfterViewChecked,
  Attribute,
  Component,
  computed,
  input,
  Input,
  model,
  OnChanges,
  output,
  Output,
  SimpleChanges,
} from '@angular/core';
import { interval } from 'rxjs';
import { CdTrackComponent } from '../cd-track/cd-track.component';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-cd-child',
  standalone: true,
  imports: [UpperCasePipe],
  template: `
    <header>
      <span>Branch: {{ branch() | uppercase }}</span>
      <span><ng-content /></span>
      <span>CD Changes: {{ cdChanges }}</span>
      <span>CD Checks: {{ cdChecked }}</span>
      <button (click)="counter = counter + 1">clicks {{ counter }}</button>
    </header>

    <main>
      @for (no of indices(); track $index) {
      <app-cd-child [branch]="branch()">Child: {{ no }}</app-cd-child>
      }

      <button (click)="add()">Add Child</button>
    </main>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 255, 0.05);
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
  branch = input('');

  recursions = model(0);
  indices = computed(() => Array.from(Array(this.recursions()).keys()));

  add = () => this.recursions.update((num) => num + 1);

  counter = 0;

  constructor() {
    super();
  }
}
