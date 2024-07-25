import { IActions, ActionsKeyEnum, CellTypeEnum, IColumnDef } from "../../common/components/table/table.model";

export const columnDefs: IColumnDef[] = [
  { key: 'name', header: 'ATM Name', cellType: CellTypeEnum.TEXT },
  { key: 'manufacturer', header: 'Manufacturer', cellType: CellTypeEnum.TEXT },
  { key: 'type', header: 'Type', cellType: CellTypeEnum.TEXT },
  { key: 'serialNumber', header: 'Serial Number', cellType: CellTypeEnum.TEXT },
  { key: 'image', header: 'Image', cellType: CellTypeEnum.IMAGE },
  { key: 'actions', header: 'Actions', cellType: CellTypeEnum.ACTIONS }
];

export const actions: IActions[] = [
  { type: ActionsKeyEnum.EDIT, icon: 'edit', color: 'primary' },
  { type: ActionsKeyEnum.DELETE, icon: 'delete', color: 'warn' },
];

export interface IATM {
  name: string;
  manufacturer: string;
  type: string;
  serialNumber: string;
  image: string;
}