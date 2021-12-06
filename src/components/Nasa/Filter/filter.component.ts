import { Component, EventEmitter, Output } from '@angular/core';
import { CameraList } from '../../Nasa/shared/camera';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() onFilter = new EventEmitter<string>();
  cameraList = CameraList;

  handleFilter(cameraName: string) {
    console.log('onFilter cameraName ', cameraName);
    this.onFilter.emit(cameraName);
  }
}
