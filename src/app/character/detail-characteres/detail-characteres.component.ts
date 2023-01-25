import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Characteres } from '../models/characteres.model';

@Component({
  selector: 'app-detail-characteres',
  templateUrl: './detail-characteres.component.html',
  styleUrls: ['./detail-characteres.component.scss']
})
export class DetailCharacteresComponent implements OnInit {

  characteresList!: Characteres[];
  characteres: Characteres|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ) {
  }

  ngOnInit() {
    const charactereID: string|null = this.route.snapshot.paramMap.get('id');

    if(charactereID){
      this.characteres = this.characterService.getCharacterById(+charactereID);
/*       this.characterService.getCharacterById(+charactereID)
        .subscribe(character => this.characteres = character); */
    }
  }

  goToCharactereList(){
    this.router.navigate(['/characteres']);
  }

  goToEditCharactere(character: Characteres){
    this.router.navigate(['edit/characteres/' + character.id]);
  }
}
