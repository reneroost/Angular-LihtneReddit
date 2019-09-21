import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikkelComponent } from './artikkel.component';

describe('ArtikkelComponent', () => {
  let component: ArtikkelComponent;
  let fixture: ComponentFixture<ArtikkelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtikkelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtikkelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
