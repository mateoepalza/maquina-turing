import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfdComponent } from './afd/afd.component';
import { MainComponent } from './main/main.component';
import { TuringComponent } from './turing/turing.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'prefix' },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'turing',
        component: TuringComponent,
      },
      {
        path: 'AFD',
        component: AfdComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
