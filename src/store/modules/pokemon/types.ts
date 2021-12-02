//TODO: types de cada parte do modulo.

export interface IRoot {
  api?: any
}

export interface IPokeActions {
  pokemon: any;
  next: any;
  previous:any;
  fetchPokemons(): void;
  fetchPokemons(params: any): void;
}

export const GET_POKEMONS = "GET_POKEMONS";
