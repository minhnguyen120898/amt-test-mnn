import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtmComponent } from './atm.component';
import { TableModule } from '../../common/components/table/table.module';
import { RouterModule, Routes } from '@angular/router';
import { EditAtmDialogModule } from './edit-atm-dialog/edit-atm-dialog.module';

export const routes: Routes = [
  {
    path: '',
    component: AtmComponent
  }
]

@NgModule({
  declarations: [
    AtmComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    EditAtmDialogModule,
    RouterModule.forChild(routes)
  ],
})
export class AtmModule { }
