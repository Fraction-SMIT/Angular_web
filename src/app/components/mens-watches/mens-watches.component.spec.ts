import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensWatchesComponent } from './mens-watches.component';

describe('MensWatchesComponent', () => {
  let component: MensWatchesComponent;
  let fixture: ComponentFixture<MensWatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensWatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
