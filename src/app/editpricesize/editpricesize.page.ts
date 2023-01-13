import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { AvatarService, Sizes } from '../services/avatar.service';

@Component({
  selector: 'app-editpricesize',
  templateUrl: './editpricesize.page.html',
  styleUrls: ['./editpricesize.page.scss'],
})
export class EditpricesizePage implements OnInit {
  @Input() id: any;
  size: Sizes =  null;

  constructor( private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private avatarService: AvatarService
    ) { }

  ngOnInit() {
    this.avatarService.getsizeById(this.id).subscribe(res => {
      console.log(res)
      this.size = res
    })
  }

  async updatePrice(){
    this.avatarService.updatePriceSize(this.size)
    const toast = await this.toastCtrl.create({
      message: 'Successfully updated!',
      duration: 1000
    })
    toast.present();
    this.modalCtrl.dismiss();
  }


}
