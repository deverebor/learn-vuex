export type IPokemon = {
  pokemon: any;
  api: any;
  next: any;
  previous:any;
  fetchPokemons(): void;
  fetchPokemons(params: any): void;
};
