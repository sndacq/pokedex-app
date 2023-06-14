export interface IPokeApi {
  name: string;
  url: string;
}

export enum PokemonType {
  normal = 'normal',
  fire = 'fire',
  water = 'water',
  grass = 'grass',
  electric = 'electric',
  ice = 'ice',
  fighting = 'fighting',
  poison = 'poison',
  ground = 'ground',
  flying = 'flying',
  psychic = 'psychic',
  bug = 'bug',
  rock = 'rock',
  ghost = 'ghost',
  dark = 'dark',
  dragon = 'dragon',
  steel = 'steel',
  fairy = 'fairy',
}

interface IType extends IPokeApi {
  name: PokemonType;
}

interface IPokemonType {
  type: IType;
  slot: number;
}

interface IFront {
  front_default: string;
}

interface IOther {
  'official-artwork': IFront;
}

interface IPokemonImage {
  other: IOther;
}

interface IPokemonStats {
  base_stat: number;
  stat: IPokeApi;
}

export interface IPokemonDetails {
  name: string;
  id: number;
  sprites: IPokemonImage;
  types: IPokemonType[];
  stats: IPokemonStats[];
}
