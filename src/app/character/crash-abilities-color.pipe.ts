import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crashAbilitiesColor'
})
export class CrashAbilitiesColorPipe implements PipeTransform {

  transform(abilities: string): string {

    let color!: string;

    switch(abilities) {
      case 'spin attack':
        color = 'green lighten-2';
        break;
      case 'jump':
        color = 'orange lighten-1';
        break;
      case'crouch':
        color = 'yellow lighten-1';
        break;
      case'genius intellect':
        color = 'red lighten-2';
        break;
      case 'control over mutants':
        color = 'blue lighten-2';
        break;
      case'hacking':
        color = 'purple lighten-3';
        break;
      case 'shooting':
        color ='blue lighten-1';
        break;
      case 'platforming':
        color = 'deep-orange';
        break;
      case 'protection':
        color = 'lime accent-1';
        break;
    }
    return 'chip ' + color;
  }
}
