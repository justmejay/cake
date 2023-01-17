import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-seller-orderlist',
  templateUrl: './seller-orderlist.page.html',
  styleUrls: ['./seller-orderlist.page.scss'],
})
export class SellerOrderlistPage implements OnInit {
  
  orders: any = []

  constructor( private avatarService: AvatarService,
    private router: Router,
    private modalController: ModalController,
    private toastCtrl: ToastController,
    private loadingctrl: LoadingController,
    private alertctrl: AlertController
    ) { 
    
    this.avatarService.getorders().subscribe(res=>{
      this.orders = res  

    })

  }

  async complete(order){
    const id = order.id

    const loading = await this.loadingctrl.create({
      message: 'Declining Order...',
      duration: 1000,
      spinner: 'dots',
  
    });
    await loading.present();
    await this.avatarService.getcompleted(id)
    this.showAlert('Success', 'Order Completed!')


  }

  async accept(order){
    const id = order.id


    const loading = await this.loadingctrl.create({
      message: 'Declining Order...',
      duration: 1000,
      spinner: 'dots',
  
    });
    await loading.present();
    await this.avatarService.getaccepted(id)
    this.showAlert('Success', 'Order Accepted!')

  }

  async decline(order){
    const id = order.id


  const loading = await this.loadingctrl.create({
    message: 'Declining Order...',
    duration: 1000,
    spinner: 'dots',

  });
    await loading.present();
    await this.avatarService.getdeclined(id)
    await this.showAlert('Success', 'Order Declined!')

  }

  ngOnInit() {
  }

  
  async showAlert(header, message) {
    const alert = await this.alertctrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
