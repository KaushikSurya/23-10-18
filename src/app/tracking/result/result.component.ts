import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../service/tracking.service';
import { ActivatedRoute } from '@angular/router';
import { Tracking } from '../model/tracking';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  tracking: Tracking;

  constructor(private trackingService: TrackingService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    console.log()
    this.activatedRoute.params.subscribe(
      (params) => {
        let oid = params['oid'];
        if (oid) {
          this.trackingService.getTrackingByOid(oid).subscribe(
            (data) => {this.tracking = data;
              this.tracking.deldpt1 = true;
              this.tracking.deldpt2 = false;
              this.tracking.delend = false;
            }
          );
        }
       
      }
    );
  }
}
