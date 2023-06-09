import { Component,  } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class mainPageComponent  {
  public characters:Character[]=[{
    name:'krilin',
    power:1000
  },{
    name:'Son Goku',
    power:9500
  }];

}
