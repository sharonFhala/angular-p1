import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagaComponent } from './baga.component';

describe('BagaComponent', () => {
  let component: BagaComponent;
  let fixture: ComponentFixture<BagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
