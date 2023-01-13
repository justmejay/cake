import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ProfileditPage } from '../profiledit/profiledit.page';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-seller-accounts',
  templateUrl: './seller-accounts.page.html',
  styleUrls: ['./seller-accounts.page.scss'],
})
export class SellerAccountsPage implements OnInit { 

  profile = null;
  profiles: any = [];

  constructor(
    private avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private modalCtrl: ModalController
  ) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });

    this.avatarService.getUserById().subscribe((res)=>{
      this.profiles = res;
    })
  }
  ngOnInit() {
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }


    }
  }

  async openProfile(profiledata){
    const modal = await this.modalCtrl.create({
      component: ProfileditPage,
      componentProps: {uid: this.profile.uid},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
   }

}
