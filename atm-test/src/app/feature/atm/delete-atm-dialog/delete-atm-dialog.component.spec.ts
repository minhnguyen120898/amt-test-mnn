import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAtmDialogComponent } from './delete-atm-dialog.component';

describe('DeleteAtmDialogComponent', () => {
  let component: DeleteAtmDialogComponent;
  let fixture: ComponentFixture<DeleteAtmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAtmDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAtmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
