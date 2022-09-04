import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHomemenuComponent } from './navbar-homemenu.component';

describe('NavbarHomemenuComponent', () => {
  let component: NavbarHomemenuComponent;
  let fixture: ComponentFixture<NavbarHomemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHomemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHomemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
