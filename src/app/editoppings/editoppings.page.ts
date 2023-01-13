import { Component, OnInit, Input } from '@angular/core';
import { AlertController, AlertOptions, ModalController, ToastController } from '@ionic/angular';
import { ModalAnimationOptions } from '@ionic/core';
import { AvatarService, Toppings } from '../services/avatar.service';

@Component({
  selector: 'app-editoppings',
  templateUrl: './editoppings.page.html',
  styleUrls: ['./editoppings.page.scss'],
})
export class EditoppingsPage implements OnInit {
  @Input() id: any;
  top: Toppings =  null;

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private avatarService: AvatarService
  ) { }

  ngOnInit() {
    this.avatarService.getTopById(this.id).subscribe(res => {
      console.log(res)
      this.top = res
    })
  }


  async updatePrice(){
    this.avatarService.updateTop(this.top)
    const toast = await this.toastCtrl.create({
      message: 'Successfully updated!',
      duration: 1000
    })
    toast.present();
    this.modalCtrl.dismiss();
  }

}
