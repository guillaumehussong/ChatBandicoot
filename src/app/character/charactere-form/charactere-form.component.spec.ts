import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactereFormComponent } from './charactere-form.component';

describe('CharactereFormComponent', () => {
  let component: CharactereFormComponent;
  let fixture: ComponentFixture<CharactereFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactereFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactereFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
