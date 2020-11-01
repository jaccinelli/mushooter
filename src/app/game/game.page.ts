import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: 'game.page.html',
  styleUrls: ['game.page.scss'],
})
export class GamePage implements OnInit {
  cantidad: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  constructor(private router: Router) {}
  score: any = 0
  counter: number = 3
  level = []
  executingLevel: any = false
  rounds : number = 0
  playingCounter: number = 0
  roundWillFire: any = false;
  roundLost: any = false;
  buttons = {'1':false,'2':false,'3':false,'4':false}
  buttonsLost = {'1':false,'2':false,'3':false,'4':false}

  ngOnInit() {
    this.nextLevel()
  }

  nextLevel(){
    this.generateLevel()
    this.fireRound()
    setTimeout(()=> {
      this.executeLevel()
    }, 1500)
  }

  playing(button){
    if (button == this.level[this.playingCounter]){
      //SELECTION MATCHES
      this.playingCounter++
    }else{
      //LOST
      this.lost(this.level[this.playingCounter])
    }
    if((this.playingCounter+1) > this.level.length){
      //LEVEL FINISHED AND WON
      this.nextLevel()
      this.rounds++
    }
  }

  lost(button){
    this.buttonsLost[button.toString()] = true
    this.roundLost = true;
    setTimeout(() => {
      this.roundLost = false;
      //REPLAY PAGE
      this.router.navigate(['/lost', { rounds: this.rounds }])
    }, 3000)
  }

  fireRound() {
    this.roundWillFire = true;
    setTimeout(() => {
      this.roundWillFire = false;
    }, 1500)
  }

  executeLevel = async () => {
    this.executingLevel = true
    var i: number;
    for (i = 0; i < this.level.length; i++){
      await delay(1, 200)
      let index = this.level[i]
      console.log(this.buttons)
      this.buttons[index] = true
      await delay(index, 1000)
      this.buttons[index] = false
    }
    this.executingLevel = false
  }

  delay(index:number, ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  generateLevel() {
    var i:number;
    this.level = []
    for (i = 0; i <= this.counter; i++){
      this.level.push(Math.floor(Math.random() * 4) + 1 )
    }
    this.counter++
    this.playingCounter = 0
  }
}
