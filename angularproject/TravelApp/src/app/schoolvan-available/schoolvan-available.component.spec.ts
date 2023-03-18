import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolvanAvailableComponent } from './schoolvan-available.component';

describe('SchoolvanAvailableComponent', () => {
  let component: SchoolvanAvailableComponent;
  let fixture: ComponentFixture<SchoolvanAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolvanAvailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolvanAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
