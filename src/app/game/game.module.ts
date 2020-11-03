import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CounterModule} from 'angular-circle-counter';
import { GamePage } from './game.page';

@NgModule({
  imports: [
    CommonModule,
    CounterModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: GamePage
      }
    ])
  ],
  declarations: [GamePage]
})
export class GamePageModule {}
