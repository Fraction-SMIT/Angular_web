import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-watches-all',
  templateUrl: './smart-watches-all.component.html',
  styleUrls: ['./smart-watches-all.component.css']
})
export class SmartWatchesAllComponent {

  

  constructor() { }


  smartWatchList: any;
  error = "";

  ngOnInit(): void {



    this.smartWatchList = [{
      "id": 1,
      "productDescription": "Timex White Dial WoMen's Watch -TW4B16400",
      "cost": 3495,
      "image": "assets/img/new1.png"
    }, {
      "id": 2,
      "productDescription": "Casio G-Shock Black Dial WoMens Watch-G270",
      "cost": 9495,
      "image": "assets/img/new2.png"
    }, {
      "id": 3,
      "productDescription": "Casio G-Shock Black Dial WoMens Watch-G272",
      "cost": 9495,
      "image": "assets/img/new3.png"
    }, {
      "id": 4,
      "productDescription": "Casio G-Shock Black Dial WoMens Watch-G317",
      "cost": 10995,
      "image": "assets/img/new1.png"
    }];




  }



}
