import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAtmDialogComponent } from './edit-atm-dialog.component';

describe('EditAtmDialogComponent', () => {
  let component: EditAtmDialogComponent;
  let fixture: ComponentFixture<EditAtmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAtmDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAtmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
