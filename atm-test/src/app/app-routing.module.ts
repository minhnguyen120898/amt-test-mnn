import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './common/layout/main-layout/main-layout.component';
import { MainLayoutModule } from './common/layout/main-layout/main-layout.module';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./feature/atm/atm.module').then(m => m.AtmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MainLayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
