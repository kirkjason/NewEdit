import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {PopoverController} from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';
@Component({
  selector: 'app-studentlist',
 // templateUrl: './studentlist.page.html',
  styleUrls: ['./studentlist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StudentlistPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: PopupPage,
      event: ev,
      mode: 'ios',
      translucent: true,
    });

    await popover.present();
    const { role } = await popover.onDidDismiss();


  }
    
}
