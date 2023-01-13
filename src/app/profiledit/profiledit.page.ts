import { Component, Input, OnInit } from '@angular/core';
import { AvatarService, userData } from '../services/avatar.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-profiledit',
  templateUrl: './profiledit.page.html',
  styleUrls: ['./profiledit.page.scss'],
})
export class ProfileditPage implements OnInit {
  profile: userData = null;
  @Input() uid: any;


  constructor(
    private   avatarService: AvatarService  ,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router
  ) { 
    this.avatarService.getUserIDEdit(this.uid).subscribe(res => {
      this.profile = res;
    })
  }

  async updateprofile(){
    this.avatarService.updateProfile(this.profile)
    const toast = await this.toastCtrl.create({
      message: 'Successfully updated!',
      duration: 1000
    })
    toast.present();
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
