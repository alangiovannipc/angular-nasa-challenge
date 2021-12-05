import { NgModule } from '@angular/core';
import { NasaModule } from '../components/Nasa';
import { MarsPhotosComponent } from './index';

@NgModule({
  imports: [NasaModule],
  declarations: [MarsPhotosComponent],
  exports: [MarsPhotosComponent],
})
export class PageModule {}
