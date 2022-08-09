import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgQueryFormComponent } from './vg-query-form.component';

describe('VgQueryFormComponent', () => {
  let component: VgQueryFormComponent;
  let fixture: ComponentFixture<VgQueryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VgQueryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VgQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
