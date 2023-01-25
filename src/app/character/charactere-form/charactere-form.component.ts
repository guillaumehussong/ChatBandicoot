import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Characteres } from '../models/characteres.model';

@Component({
  selector: 'app-charactere-form',
  templateUrl: './charactere-form.component.html',
  styleUrls: ['./charactere-form.component.scss']
})
export class CharactereFormComponent implements OnInit {

  @Input() character!: Characteres;
  abilities!: string[];

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.abilities = this.characterService.getCharacterAbilitieList();
  }

  hasAbilitie(abilitie: string): boolean {
    return this.character.abilities.includes(abilitie);
  }

  selectAbilitie($event: Event, abilitie: string) {
    if(($event.target as HTMLInputElement).checked){
      this.character.abilities.push(abilitie);
    } else {
      this.character.abilities = this.character.abilities.filter(a => a !== abilitie);
    }
  }

  isAbilitieValid(abilitie: string): boolean {

    if(this.character.abilities.length == 1 && this.hasAbilitie(abilitie)){
      return false;
    }

    if(this.character.abilities.length >= 3 && !this.hasAbilitie(abilitie)){
      return false;
    }

    return true;
  }

  onSubmit(){
    this.router.navigate(['/character/' + this.character.id]);
  }
}
