import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPartyComponent } from './wedding-party.component';

describe('WeddingPartyComponent', () => {
  let component: WeddingPartyComponent;
  let fixture: ComponentFixture<WeddingPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
