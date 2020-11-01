import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GamePage } from '../game/game.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cantidad: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  constructor(public router: Router) {}
  
  play(){
    this.router.navigate(['/game'])
  }
}
