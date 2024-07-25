import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { actions, IATM, columnDefs } from './atm.model';
import { AtmService } from './atm.service';
import { Observable } from 'rxjs';
import { ActionsKeyEnum } from '../../common/components/table/table.model';
import { MatDialog } from '@angular/material/dialog';
import { EditAtmDialogComponent } from './edit-atm-dialog/edit-atm-dialog.component';
import { DeleteAtmDialogComponent } from './delete-atm-dialog/delete-atm-dialog.component';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrl: './atm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtmComponent implements OnInit {
  public columnDefs = columnDefs;
  public atm$!: Observable<IATM[]>;
  public actions = actions;

  constructor(private atmService: AtmService, private dialog: MatDialog) {}

  ngOnInit() {
    this.atm$ = this.atmService._atm$;
  }

  public handleActions(payload: {type: ActionsKeyEnum, data: IATM}): void {    
    switch (payload.type) {
      case ActionsKeyEnum.DELETE:
        this.openDeleteDialog(payload.data);
        break;
      case ActionsKeyEnum.EDIT:
        this.openEditDialog(payload.data);
        break;
      default:
        break;
    }
  }

  private openEditDialog(element: IATM): void {    
    const dialogRef = this.dialog.open(EditAtmDialogComponent, {
      width: '400px',
      data: { ...element }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {        
        this.atmService.editATM(result);
      }
    });
  }

  private openDeleteDialog(element: IATM): void {
    const dialogRef = this.dialog.open(DeleteAtmDialogComponent, {
      width: '300px',
      data: { serialNumber: element.serialNumber }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.atmService.deleteATM(element.serialNumber);
      }
    });
  }
}
