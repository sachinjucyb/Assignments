import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGames } from 'src/app/Utility/IGames';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})


export class GridComponent implements OnInit {
  Games: IGames[] = [{ flag: true, ISBN: 1001, title: "Let us C", Provider: "yashwant Kanitkar", price: 450, Image: "./assets/img/FORT/f1.jpg" },
  { flag: true, ISBN: 1002, title: "secret of nagas", Provider: "Amish tripathi", price: 450, Image: "./assets/img/FORT/f2.jpg" },
  { flag: true, ISBN: 1003, title: "immortals of meluha", Provider: "Amish tripathi", price: 350, Image: "./assets/img/FORT/f3.jpg" },
  { flag: true, ISBN: 1004, title: "scion of ikshwaku", Provider: "Amish tripathi", price: 350, Image: "./assets/img/FORT/f4.jpg" },
  { flag: true, ISBN: 1005, title: "Warrior of mithila: Sita", Provider: "Amish tripathi", price: 350, Image: "./assets/img/FORT/f5.jpg" }
  ]
  num: number = 200;
  todaysDate: Date = new Date();

 
  constructor() { }

  ngOnInit(): void {
  }

}
