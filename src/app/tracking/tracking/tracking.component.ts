import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrackingService } from '../service/tracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  oid : number;
  constructor(private router : Router,
    private trackingService : TrackingService) { }

  ngOnInit() {
  }

  doTrack(){
    this.router.navigateByUrl("/track/"+this.oid);
  }

}