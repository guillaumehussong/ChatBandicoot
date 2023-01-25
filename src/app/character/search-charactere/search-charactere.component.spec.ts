import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCharactereComponent } from './search-charactere.component';

describe('SearchCharactereComponent', () => {
  let component: SearchCharactereComponent;
  let fixture: ComponentFixture<SearchCharactereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCharactereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCharactereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
