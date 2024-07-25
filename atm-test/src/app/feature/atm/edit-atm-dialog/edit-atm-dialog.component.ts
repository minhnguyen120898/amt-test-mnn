import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IATM } from '../atm.model';

@Component({
  selector: 'app-edit-atm-dialog',
  templateUrl: './edit-atm-dialog.component.html',
  styleUrl: './edit-atm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditAtmDialogComponent implements OnInit {
  public atmForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditAtmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IATM
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm():void {
    this.atmForm = this.fb.group({
      name: [this.data.name, Validators.required],
      manufacturer: [this.data.manufacturer, Validators.required],
      type: [this.data.type, Validators.required],
      serialNumber: [this.data.serialNumber, Validators.required],
      image: [this.data.image, Validators.required]
    });
  }

  onSave(): void {
    this.dialogRef.close(this.atmForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
