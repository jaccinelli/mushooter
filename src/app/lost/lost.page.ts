import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-lost',
  templateUrl: 'lost.page.html',
  styleUrls: ['lost.page.scss'],
})
export class LostPage implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute) {}
  rounds: number = 0
  ngOnInit() {
    
  }

  play(){
    this.router.navigate(['/game'])
  }

}
