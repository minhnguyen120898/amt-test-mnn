import { Injectable } from '@angular/core';
import { BaseService } from '../../common/service/base.service';
import { HttpClient } from '@angular/common/http';
import { IATM } from './atm.model';
import { BehaviorSubject } from 'rxjs';

let mockData: IATM[] =[
  {
    name: 'ATM 1',
    manufacturer: 'Manufacturer A',
    type: 'Type A',
    serialNumber: 'SN001',
    image: 'path/to/image1.jpg'
  },
  {
    name: 'ATM 2',
    manufacturer: 'Manufacturer B',
    type: 'Type B',
    serialNumber: 'SN002',
    image: 'path/to/image2.jpg'
  },
  {
    name: 'ATM 3',
    manufacturer: 'Manufacturer C',
    type: 'Type C',
    serialNumber: 'SN003',
    image: 'path/to/image3.jpg'
  }
]

// Mock api has issue so I cann't interact API currently
@Injectable({
  providedIn: 'root'
})
export class AtmService extends BaseService {
  private atm$ = new BehaviorSubject<IATM[]>(mockData);
  public _atm$ = this.atm$.asObservable();
  
  constructor(http: HttpClient) {
    super(http);
  }

  private updateAtms(atms: IATM[]) {
    this.atm$.next(atms);
  }

  // Mock api has issue so I cann't interact API currently
  // If we have real BE side, we can use those functions from BaseService
  public searchAtm(queryParams: string): void {
    let data = [...mockData];
    if (queryParams) {
      queryParams = queryParams.toLowerCase();

      data = data.filter(atm =>
        atm.name.toLowerCase().includes(queryParams) ||
        atm.serialNumber.toLowerCase().includes(queryParams) ||
        atm.manufacturer.toLowerCase().includes(queryParams)
      );
    }    
    this.updateAtms(data);
  }

  public editATM(updatedATM: IATM): void {
    const index = mockData.findIndex(atm => atm.serialNumber === updatedATM.serialNumber);
    if (index !== -1) {
      mockData[index] = updatedATM;            
      this.updateAtms([...mockData]);
    }
  }

  public deleteATM(serialNumber: string): void {
    mockData = mockData.filter(atm => atm.serialNumber !== serialNumber);
    this.updateAtms([...mockData]);
  }
}
