import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTravelsComponent } from './home-travels.component';

describe('HomeTravelsComponent', () => {
  let component: HomeTravelsComponent;
  let fixture: ComponentFixture<HomeTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTravelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
