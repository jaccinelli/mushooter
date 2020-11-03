import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { delay } from 'q';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { core } from '@angular/compiler';
import { timer } from 'timer'

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss'],
})
export class GamePage implements OnInit {
  cantidad: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  constructor(public alertController: AlertController, private router: Router, private elementRef: ElementRef, private route: ActivatedRoute) {
    
  }
  juegoActivo: boolean = true
  ms: number = 2000;
  level: number = 2;
  showCounter: boolean = false;
  pressed: boolean = false;
  lifes: number = 5;
  points: number = 0;
  ngOnInit() {
    this.initialize()
  }

  initialize() {
    var hongo = document.getElementById("mushroom")
    setTimeout(() => {
      var counterTimerStart = document.getElementById("counterTimerStart")
      counterTimerStart.remove()
      this.juegoActivo = true
      this.ms = this.ms / this.level
      this.showCounter = true
      this.core()
    }, 3500)
  }

  core = async () => {
    if(this.juegoActivo && !this.pressed){
      this.showCounter = false
      this.lifes = this.lifes -1
      this.randomPosition()
    }
    if(this.lifes < 1){
      this.showCounter = false
      this.callLost()
    }else{
      this.pressed = false;
      await timer(this.ms)
      this.core()
    }
  }

  mushroomPressed(){
    this.pressed = true;
    this.points = this.points + this.level
    this.showCounter = false
    this.randomPosition()
  }

  callLost(){
    this.router.navigate(['/lost', { rounds: this.points }])
  }

  randomPosition(){
    var hongo = document.getElementById("mushroom")
    var statusBar = document.getElementById("statusBar")
    let alto = window.screen.height;
    let ancho = window.screen.width;
    let anchoHongo = hongo.clientWidth
    let alturaHongo = hongo.clientHeight
    let random:any = Math.random() * (ancho - 0) + 0;
    let randomAltura:any = Math.random() * (alto - 0) + 0;
    hongo.style.height = "100px"
    if (random + anchoHongo > ancho){
      random = random - ((random + anchoHongo) - ancho)
    }
    random = Math.round(random).toString()
    hongo.style.marginLeft = random + "px";
    
    if (randomAltura + alturaHongo + statusBar.clientHeight > alto){
      randomAltura = randomAltura - ((randomAltura + alturaHongo + statusBar.clientHeight) - alto)
    }
    random = Math.round(randomAltura).toString()
    hongo.style.marginTop = randomAltura + "px";
    setTimeout(() => {
      this.showCounter = true
    }, 10)
  }

  async presentAlertExit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exit game?',
      message: 'Are you sure that you want to exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'letraPuntos',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Exit',
          handler: () => {
            this.router.navigate(['/'])
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertRestart() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Restart game?',
      message: 'Are you sure that you want to restart?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'letraPuntos',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Restart',
          handler: () => {
            this.initialize()
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
