import { NgModule } from '@angular/core';
import { FilterComponent } from '../Nasa/Filter/filter.component';
import { ListPhotosComponent } from '../Nasa/ListPhotos/list-photos.component';

@NgModule({
  declarations: [FilterComponent, ListPhotosComponent],
  exports: [FilterComponent, ListPhotosComponent],
})
export class NasaModule {}
