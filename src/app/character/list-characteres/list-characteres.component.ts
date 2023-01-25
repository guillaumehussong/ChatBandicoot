import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Characteres } from '../models/characteres.model';
import { CharacterService } from '../character.service';
import { Observable, Subject } from 'rxjs';
import { SearchCharactereComponent } from '../search-charactere/search-charactere.component';

@Component({
  selector: 'app-list-characteres',
  templateUrl: './list-characteres.component.html',
  styleUrls: ['../../app.component.scss']
})
export class ListCharacteresComponent implements OnInit{

  characteresList: Characteres[] = [];
  char: SearchCharactereComponent = new SearchCharactereComponent(this.characterService, this.router);

  charsList!: Characteres[];
  charactereSelected?: Characteres;

  searchTerms = new Subject<string>();

  constructor(
      private router: Router,
      private characterService: CharacterService,
    ) { }

  ngOnInit(){
      this.characteresList = this.characterService.getCharacterList('');
      // this.characterService.getCharacterList().subscribe(charList => this.characteresList = charList)

  }

  voirProfil(profil: Characteres){
    this.router.navigate(['/characteres/', profil.id]);
  }

  selectCharactere(term: any) {
    this.charsList = this.characterService.getCharacterList('');
    const charactere: any = this.charsList.find(item => item.id == +term);
    this.searchTerms.next(term);

    if (charactere){
      this.charactereSelected = charactere;
    }else{
      this.charactereSelected = undefined;
    }
  }
}
