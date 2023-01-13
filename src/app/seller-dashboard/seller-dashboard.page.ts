import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AvatarService } from '../services/avatar.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CallTracker } from 'assert';
import { Router } from '@angular/router';




@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.page.html',
  styleUrls: ['./seller-dashboard.page.scss'],
})
export class SellerDashboardPage implements OnInit {
  cakes: any = []; 


  constructor(
    private alertCtrl: AlertController,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
    private avatarService: AvatarService,
    private router: Router
  ) {
    this.avatarService.getCakes().subscribe(res=>{
      this.cakes = res  
    })

   }

  ngOnInit() {
  }

  async addCake(cake){

    this.router.navigateByUrl('/addcake', { replaceUrl: true });



  }

  async editCake(cake){

this.router.navigate(['editcake'], {queryParams:{cakeid: cake.id}});



  }



  // async addCake(){
  //   const alert = await this.alertCtrl.create({
  //     header: 'Add cake',
  //     inputs: [
  //       {
  //         name: 'name',
  //         placeholder: 'Cake Name',
  //         type: 'text'
  //       },
  //       {
  //         name: 'price',
  //         placeholder: 'Cake Price',
  //         type: 'number'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       },
  //       {
  //         text: 'Add',
  //         handler: (res) => {
  //           this.avatarService.addCake({name: res.name, price: res.price, imageUrl: ""})
  //           //this.dataService.addNoteWithCustomId({title: res.title, text})
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  //  }

  //  async changeImage(cake) {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.Base64,
  //     source: CameraSource.Camera, // Camera, Photos or Prompt!
  //   });

  //   if (image) {
  //     const loading = await this.loadingController.create();
  //     await loading.present();

  //     const result = await this.avatarService.uploadImageCake(image, cake.id);
  //     loading.dismiss();

  //     if (!result) {
  //       const alert = await this.alertController.create({
  //         header: 'Upload failed',
  //         message: 'There was a problem uploading your avatar.',
  //         buttons: ['OK'],
  //       });
  //       await alert.present();
  //     }


  //   }
  // }

}
