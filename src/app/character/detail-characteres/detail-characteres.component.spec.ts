import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharacteresComponent } from './detail-characteres.component';

describe('DetailCharacteresComponent', () => {
  let component: DetailCharacteresComponent;
  let fixture: ComponentFixture<DetailCharacteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCharacteresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCharacteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
