export enum CharacterStatus {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "unknown",
}

export interface ICharacter {
  id: number;
  image: string;
  name: string;
  status: CharacterStatus;
  species: string;
  location: { name: string };
  created: string;
}

export interface ICharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: ICharacter[];
}
