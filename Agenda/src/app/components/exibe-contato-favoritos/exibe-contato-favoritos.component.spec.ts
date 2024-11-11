import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContatoFavoritosComponent } from './exibe-contato-favoritos.component';

describe('ExibeContatoFavoritosComponent', () => {
  let component: ExibeContatoFavoritosComponent;
  let fixture: ComponentFixture<ExibeContatoFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExibeContatoFavoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeContatoFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
