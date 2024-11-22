import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListPage } from './consumo-api.page';

describe('PokemonListPage', () => {
  let component: PokemonListPage;
  let fixture: ComponentFixture<PokemonListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});