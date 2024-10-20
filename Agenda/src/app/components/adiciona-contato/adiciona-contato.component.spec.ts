import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaContatoComponent } from './adiciona-contato.component';

describe('AdicionaContatoComponent', () => {
  let component: AdicionaContatoComponent;
  let fixture: ComponentFixture<AdicionaContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionaContatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
