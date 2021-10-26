import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClildComponent } from './clild.component';

describe('ClildComponent', () => {
  let component: ClildComponent;
  let fixture: ComponentFixture<ClildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
