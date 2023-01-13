import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';
import { Layers } from '../services/avatar.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-editprice',
  templateUrl: './editprice.page.html',
  styleUrls: ['./editprice.page.scss'],
})
export class EditpricePage implements OnInit {
  @Input() id: any;
  layer: Layers =  null;


  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private avatarService: AvatarService
  ) { }




  ngOnInit() {
    this.avatarService.getlayerById(this.id).subscribe(res => {
      console.log(res)
      this.layer = res
    })
  }
 
  async updatePrice(){
    this.avatarService.updatePriceLayer(this.layer)
    const toast = await this.toastCtrl.create({
      message: 'Successfully updated!',
      duration: 1000
    })
    toast.present();
    this.modalCtrl.dismiss();
  }


}
