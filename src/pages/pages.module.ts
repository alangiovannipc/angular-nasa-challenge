import { NgModule } from '@angular/core';
import { NasaModule } from '../components/Nasa';
import { MarsPhotosComponent } from './index';
import { PagesRoutingModule } from './pages.module.routing';

@NgModule({
  imports: [NasaModule, PagesRoutingModule],
  declarations: [MarsPhotosComponent],
  exports: [MarsPhotosComponent],
})
export class PageModule {}
