import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IActions, ActionsKeyEnum, CellTypeEnum, IColumnDef } from './table.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnInit, OnChanges {
  @Input() columnDefs: IColumnDef[] = [];
  @Input() data: T[] = [];
  @Input() actions: IActions[] = [];
  @Output() actionEmitter = new EventEmitter<{ type: ActionsKeyEnum, data: T}>();

  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<T>;

  public readonly CellTypeEnum = CellTypeEnum;

  constructor() {
    this.dataSource = new MatTableDataSource<T>([]);
  }

  ngOnInit(): void {
    this.displayedColumns = this.columnDefs.map(col => col.key);
    this.updateDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.updateDataSource();
    }
    if (changes['columnDefs']) {
      this.displayedColumns = this.columnDefs.map(col => col.key);
    }
  }

  private updateDataSource(): void {
    this.dataSource.data = this.data;
  }

  // These actions should be dynamic, but I didn't have enough time for customization.
  onActions(type: ActionsKeyEnum,item: T): void {
    this.actionEmitter.emit({type, data: item});
  }
}
