import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SathyaComponent } from './sathya.component';

describe('SathyaComponent', () => {
  let component: SathyaComponent;
  let fixture: ComponentFixture<SathyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SathyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SathyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
