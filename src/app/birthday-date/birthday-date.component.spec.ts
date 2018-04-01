import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BirthdayDateComponent } from './birthday-date.component';

describe('BirthdayDateComponent', () => {
  let component: BirthdayDateComponent;
  let fixture: ComponentFixture<BirthdayDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdayDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdayDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
