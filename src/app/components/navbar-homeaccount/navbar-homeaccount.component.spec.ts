import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHomeaccountComponent } from './navbar-homeaccount.component';

describe('NavbarHomeaccountComponent', () => {
  let component: NavbarHomeaccountComponent;
  let fixture: ComponentFixture<NavbarHomeaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHomeaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHomeaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
