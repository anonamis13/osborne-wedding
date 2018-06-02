import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCincinnatiComponent } from './explore-cincinnati.component';

describe('ExploreCincinnatiComponent', () => {
  let component: ExploreCincinnatiComponent;
  let fixture: ComponentFixture<ExploreCincinnatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCincinnatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCincinnatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
