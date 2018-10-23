import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pic1: string;
  pic2: string;

  constructor() { 
    this.pic1 = "/assets/Courier-Service.png";
    this.pic2 = "/assets/domestic-courier.png";
  }

  ngOnInit() {
  }

}
