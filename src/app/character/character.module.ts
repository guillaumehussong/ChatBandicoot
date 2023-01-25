import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCharacteresComponent } from './list-characteres/list-characteres.component';
import { DetailCharacteresComponent } from './detail-characteres/detail-characteres.component';
import { SearchCharactereComponent } from './search-charactere/search-charactere.component';
import { BorderCardDirective } from './border-card.directive';
import { CrashAbilitiesColorPipe } from './crash-abilities-color.pipe';
import { Routes, RouterModule } from '@angular/router';
import { CharacterService } from './character.service';
import { FormsModule } from '@angular/forms';
import { CharactereFormComponent } from './charactere-form/charactere-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const charRoutes: Routes = [
  { path: 'edit/characteres/:id', component: EditPokemonComponent },
  { path: 'characteres', component: ListCharacteresComponent },
  { path: 'characteres/:id', component: DetailCharacteresComponent }
];

@NgModule({
  declarations: [
    SearchCharactereComponent,
    ListCharacteresComponent,
    DetailCharacteresComponent,
    BorderCardDirective,
    CrashAbilitiesColorPipe,
    CharactereFormComponent,
    EditPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(charRoutes)
  ],
  providers: [CharacterService]
})
export class CharacterModule { }
