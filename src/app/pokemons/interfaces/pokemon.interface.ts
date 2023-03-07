export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: Type[];
  moves: Move[];
  image1: string;
  image2: string;
  area: string;
}

export interface Type {
  name: string;
}

export interface Move {
  name: string;
}
