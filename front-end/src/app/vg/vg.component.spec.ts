import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgComponent } from './vg.component';

describe('VgComponent', () => {
  let component: VgComponent;
  let fixture: ComponentFixture<VgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
