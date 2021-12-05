import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarsPhotosComponent } from '.';

const routes = [{ path: 'mars', component: MarsPhotosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
