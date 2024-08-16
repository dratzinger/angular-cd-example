import {
  AfterViewChecked,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-cd-track',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
})
export class CdTrackComponent implements OnChanges, AfterViewChecked {
  cdChecked = 0;
  cdChanges = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CD triggered', { changes });
    this.cdChanges++;
  }

  ngAfterViewChecked(): void {
    console.log('CD checked', 'Component', this);
    this.cdChecked++;
  }

  noop = () => {};
}
