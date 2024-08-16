import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CdChildComponent } from '../cd-child/cd-child.component';
import { CdTrackComponent } from '../cd-track/cd-track.component';
import { interval } from 'rxjs';

const changeDetection = ChangeDetectionStrategy.OnPush;

@Component({
  selector: 'app-cd-wrapper',
  standalone: true,
  imports: [CdChildComponent],
  changeDetection,
  template: `
    <header>
      <span>Root</span>
      <span>CD Changes: {{ cdChanges }}</span>
      <span>CD Checks: {{ cdChecked }}</span>
      <button (click)="counter = counter + 1">click {{ counter }}</button>
    </header>

    <main>
      <app-cd-child [recursions]="3" branch="A" />
      <app-cd-child [recursions]="3" branch="B" />
    </main>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 255, 0.1);
      min-width: 10vw;
      min-height: 10vh;
      align-items: center;
      padding: 1em;
    }
  `,
})
export class CdWrapperComponent extends CdTrackComponent {
  counter = 0;

  constructor() {
    super();
  }
}
