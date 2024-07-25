export enum CellTypeEnum {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  ACTIONS = 'ACTIONS'
}

export interface IColumnDef {
  key: string;
  header: string;
  cellType: CellTypeEnum;
}

export enum ActionsKeyEnum {
  EDIT = "EDIT",
  DELETE = "DELETE",
  CANCEL = "CANCEL"
}

export interface IActions {
  type: ActionsKeyEnum,
  icon: string,
  color: string,
}