import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBranchesListComponent } from './bank-branches-list.component';

describe('BankBranchesListComponent', () => {
  let component: BankBranchesListComponent;
  let fixture: ComponentFixture<BankBranchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankBranchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankBranchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
