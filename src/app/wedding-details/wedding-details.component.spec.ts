import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDetailsComponent } from './wedding-details.component';

describe('WeddingDetailsComponent', () => {
  let component: WeddingDetailsComponent;
  let fixture: ComponentFixture<WeddingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
