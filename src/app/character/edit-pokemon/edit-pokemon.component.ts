import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { Characteres } from '../models/characteres.model';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  character: Characteres|undefined;

  constructor(
    private charactereService: CharacterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const characterId: string|null = this.route.snapshot.paramMap.get('id');
    if(characterId) {
      this.character = this.charactereService.getCharacterById(+characterId);
/*       this.charactereService.getCharacterById(+characterId)
        .subscribe(character => this.character = character); */
    }else {
      this.character = undefined;
    }
  }
}
