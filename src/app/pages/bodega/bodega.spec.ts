import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bodega } from './bodega';

describe('Bodega', () => {
  let component: Bodega;
  let fixture: ComponentFixture<Bodega>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bodega],
    }).compileComponents();

    fixture = TestBed.createComponent(Bodega);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
