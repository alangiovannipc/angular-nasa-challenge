import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() onFilter = new EventEmitter<string>();

  handleFilter(cameraName: string) {
    console.log('onFilter cameraName ', cameraName);
    this.onFilter.emit(cameraName);
  }
}
