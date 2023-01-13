import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { AlertButton, AlertController, LoadingController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';
import { AuthService } from '../services/auth.service';
import { Validators } from '@angular/forms';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.page.html',
  styleUrls: ['./addcake.page.scss'],
})
export class AddcakePage implements OnInit {
  credentials: FormGroup;
  public testimg: any;
  public camera: any;
  public base64Image: any;
  cakeupdate:any;
  public image: Photo;

  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private avatarService: AvatarService
  ) {
   }

   get name() {
    return this.credentials.get('name');
  }

  get price() {
    return this.credentials.get('price');
  }



  ngOnInit() {
    this.credentials = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required,]], 
   


    });
  }

  async addImage(){ 
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });

    this.base64Image = "data:image/jpeg;base64, " + image.base64String;
    this.image = image;


  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.base64Image);     
}

async addcakeDetails(){
  const loading = await this.loadingController.create();
  await loading.present();

  const cakepass = await this.avatarService.addCakeData(this.credentials.value);
  await loading.dismiss();

  if (cakepass) {

      this.avatarService.getImageData(this.image, cakepass.id);

    this.showAlert('Success', 'Cake Added!')
    this.router.navigateByUrl('/sellertabs/seller-dashboard', { replaceUrl: true });
  } else {
    this.showAlert('Registration failed', 'Please try again!');
  }


}


async showAlert(header, message) {
  const alert = await this.alertController.create({
    header,
    message,
    buttons: ['OK'],
  });
  await alert.present();
}

  

}
