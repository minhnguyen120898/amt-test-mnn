import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-atm-dialog',
  templateUrl: './delete-atm-dialog.component.html',
  styleUrl: './delete-atm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteAtmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteAtmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { serialNumber: string }
  ) {}

  onDelete(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
