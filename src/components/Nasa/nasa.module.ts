import { NgModule } from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { SharedModule } from '../../shared/shared.module';
import { FilterComponent } from '../Nasa/Filter/filter.component';
import { ListPhotosComponent } from '../Nasa/ListPhotos/list-photos.component';
import { SearchComponent } from '../Nasa/Search/search.component';

@NgModule({
  imports: [SharedModule],
  declarations: [FilterComponent, ListPhotosComponent, SearchComponent],
  exports: [FilterComponent, ListPhotosComponent, SearchComponent],
  providers: [NasaService],
})
export class NasaModule {}
