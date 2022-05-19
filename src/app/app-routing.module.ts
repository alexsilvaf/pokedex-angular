import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
