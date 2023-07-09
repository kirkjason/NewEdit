import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
menu:any = [
  {
    "menu_id": "1",
    "image": "assets\q.png",
    "title": "Play Quiz"
  },
  {
    "menu_id": "2",
    "image": "assets\nb.png",
    "title": "play Quiz"

  },
  {
    "menu_id": "3",
    "image": "logo.jpeg",
    "title": "Play Quiz"
  },
  {
    "menu_id": "4",
    "image": "logo.jpeg",
    "title": "Play Quiz"

  },
  {
    "menu_id": "5",
    "image": "logo.jpeg",
    "title": "Play Quiz"
  },
  {
    "menu_id": "6",
    "image": "logo.jpeg",
    "title": "Play Quiz"

  },
  {
    "menu_id": "7",
    "image": "logo.jpeg",
    "title": "Play Quiz"
  }

]
  constructor() { }

  ngOnInit() {
  }

}
