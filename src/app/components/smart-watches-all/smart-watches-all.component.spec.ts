import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWatchesAllComponent } from './smart-watches-all.component';

describe('SmartWatchesAllComponent', () => {
  let component: SmartWatchesAllComponent;
  let fixture: ComponentFixture<SmartWatchesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartWatchesAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartWatchesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
