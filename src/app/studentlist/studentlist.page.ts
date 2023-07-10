import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';
import { PopupPage } from '../popup/popup.page';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.page.html',
  styleUrls: ['./studentlist.page.scss'],
  standalone: false,
})
export class StudentlistPage implements OnInit {

  constructor(private router: Router, public popoverController: PopoverController) { }

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
  goBack(){
    this.router.navigate(['dashboard']);
  }
    
}
