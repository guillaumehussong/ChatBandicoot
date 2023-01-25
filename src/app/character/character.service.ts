import { Injectable } from '@angular/core';
import { Characteres } from './models/characteres.model';
//import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, Subject, tap } from 'rxjs';
import { CHARACTERES } from './mocks/characteres';
@Injectable()
export class CharacterService {


  // constructor(private http: HttpClient) { }
  constructor() { }

/*   getCharacterList(): Observable<Characteres[]> {
    return this.http.get<Characteres[]>('api/characteres', this.httpOptions).pipe(
      tap((data) => this.log(data)),
      catchError((error) => this.handleError(error, []))
    );
  }
 */
  getCharacterList(term: any){
    if (term) {
      const searchWords = CHARACTERES.find(char => term == char);
      return searchWords ? [searchWords] : [];
    } else {
      return CHARACTERES;
    }
  }

/*   getCharacterById(characterId: number): Observable<Characteres|undefined> {
    return this.http.get<Characteres>(`api/characteres/${characterId}`).pipe(
      tap((data) => this.log(data)),
      catchError((error) => this.handleError(error, undefined))
    );
  } */


  getCharacterById(characterID: number) {
    return CHARACTERES.find(character => character.id === characterID);
  }

  getCharacterAbilitieList(): string[] {
    return ['Force', 'Dextérité', 'Constitution', 'Intelligence', 'Sagesse', 'Charisme',
            'spin attack', 'jump', 'crouch', 'genius intellect', 'control over mutants',
            'hacking', 'shooting', 'platforming', 'agility', 'courage', 'protection',
            'power-ups', 'weapons', 'speed', 'strength', 'intelligence', 'durability', 'energy projection',];
  }

  private log(response: Characteres[] | Characteres|undefined) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
