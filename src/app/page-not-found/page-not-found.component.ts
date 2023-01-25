import { Component } from '@angular/core';

@Component({
    selector: 'page-404',
    template: `
    <div class='center'>
      <img src="https://static.wikia.nocookie.net/crashban/images/1/12/Wrath_of_Cortex_Uka_Uka.png"/>
      <h1>Erreur 404<br>Hey, cette page n'existe pas !</h1>
      <a routerLink="/characteres" class="waves-effect waves-teal btn-flat">
        <button class="btn-small waves-effect waves-light" >Retourner à l' accueil</button>
      </a>
    </div>
  `,
    styles: ['.center {margin: 10em 0; text-align: center; display: block;}'],
})
export class PageNotFoundComponent { }
