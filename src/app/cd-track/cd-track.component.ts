import {
  AfterViewChecked,
  Component,
  OnChanges,
  SimpleChanges,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-cd-track',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
})
export class CdTrackComponent implements OnChanges, AfterViewChecked {
  cdChecked = signal(0);
  cdChanges = signal(0);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CD triggered', { changes });
    this.cdChanges.update((n) => n + 1);
  }

  ngAfterViewChecked(): void {
    console.log('CD checked', 'Component', this);
    this.cdChecked.update((n) => n + 1);
  }

  noop = () => {};
}
