import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSwitcherComponent } from './btn-switcher.component';
import { SharedModule } from '../shared.module';

describe('BtnSwitcherComponent', () => {
  let component: BtnSwitcherComponent;
  let fixture: ComponentFixture<BtnSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnSwitcherComponent ],
      imports: [SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
