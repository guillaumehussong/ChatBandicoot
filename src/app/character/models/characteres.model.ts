export class Characteres{
  id?: number;
  name: string;
  description: string;
  ptDeVie: number;
  degats: number;
  image: string;
  abilities: string[];
  created = new Date();

  constructor(
    id: number,
    name: string = 'Entrer un nom...',
    description: string = 'Entrer une description...',
    ptDeVie: number = 100,
    degats: number = 10,
    image: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
    abilities: string[] = ['Normal'],
    created: Date = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ptDeVie = ptDeVie;
    this.degats = degats;
    this.image = image;
    this.abilities = abilities;
    this.created = created;
  }

}
