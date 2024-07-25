import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteAtmDialogComponent } from './delete-atm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DeleteAtmDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [DeleteAtmDialogComponent]
})
export class DeleteAtmDialogModule { }
