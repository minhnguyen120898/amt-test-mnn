import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { AtmService } from '../../../feature/atm/atm.service';
import { DestroyService } from '../../service/destroy.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class HeaderComponent implements OnInit {
  private searchSubject = new Subject<string>();

  constructor(private atmService: AtmService, private readonly destroy$: DestroyService) {}

  public onSearch(searchValue: string): void {    
    this.searchSubject.next(searchValue);
  }

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((searchValue) => {        
        return this.atmService.searchAtm(searchValue)
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
