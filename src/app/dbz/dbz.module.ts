import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharaterComponent } from './components/add-charater/add-charater.component';



@NgModule({
  declarations: [
    mainPageComponent,
    ListComponent,
    AddCharaterComponent
  ],
  exports:[
    mainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
