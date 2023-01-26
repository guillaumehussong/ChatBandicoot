import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, Subject } from 'rxjs';
import { Characteres } from '../models/characteres.model';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-charactere',
  templateUrl: './search-charactere.component.html',
  styleUrls: ['./search-charactere.component.scss']
})
export class SearchCharactereComponent implements OnInit{

  searchTerms = new Subject<string>();
  charSelected$ = Observable<Characteres[]>;

  selectedChar: any;
  charsList!: Characteres[];
  charactereSelected?: Characteres;

  constructor(
    private characterService: CharacterService,
    private router: Router,
  ) { }

  ngOnInit(): void{
    this.selectedChar = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((term) => this.characterService.getCharacterList(term))
    );
   }
}
