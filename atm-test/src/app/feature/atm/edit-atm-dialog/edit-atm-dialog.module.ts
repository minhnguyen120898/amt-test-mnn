import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAtmDialogComponent } from './edit-atm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    EditAtmDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [EditAtmDialogComponent]
})
export class EditAtmDialogModule { }
