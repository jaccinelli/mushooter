import { Component, OnInit, Input } from '@angular/core';
import { delay } from 'q';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lost',
  templateUrl: 'lost.page.html',
  styleUrls: ['lost.page.scss'],
})
export class LostPage implements OnInit {
  
  public rounds: any = 0
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.rounds = params.rounds
    })
  }
  
  ngOnInit() {
    
  }

  play(){
    this.router.navigate(['/game'])
  }

}
