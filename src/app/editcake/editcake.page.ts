import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, ToastController} from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService} from '../services/avatar.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-editcake',
  templateUrl: './editcake.page.html',
  styleUrls: ['./editcake.page.scss'],
})
export class EditcakePage implements OnInit {
  credentials: FormGroup;
  toppings: any = [];
  idcake: any;
  cake:any = [];
  @ViewChild(IonModal) modal: IonModal;

  cancel() {
    this.modal.dismiss();
  }

  confirm() {
    this.modal.dismiss();
  }



  constructor(
    private sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private avatarService: AvatarService,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController
  ) { 

    this.activatedRoute.queryParams.subscribe((params) =>{
      this.idcake = params['cakeid'];

      this.avatarService.getCakeById(this.idcake).subscribe(res => {
        this.cake = res;
      });


    });
    this.avatarService.getToppings().subscribe(res=>{
      this.toppings = res  
    });


   

  }
    
 
  get topname() {
    return this.credentials.get('topname');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      topname: ['', [Validators.required]],

    });
  }

  async addToppings(){
    const loading = await this.loadingController.create();
    await loading.present();
  
    const toppings = await this.avatarService.addToppings(this.credentials.value)
    await loading.dismiss();
    
  }
  

  async deleteCake(){
    const alert = await this.alertController.create({
      header: "Delete Toppings",
      message: "Are you sure you want to delete?",
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler:()=>{
            this.avatarService.deleteCake(this.cake);
            this.showAlert('Success', 'Cake Deleted!')
            this.router.navigateByUrl('/sellertabs/seller-dashboard', { replaceUrl: true });
            this.modalController.dismiss();
          }
        }
      ]
    })
    alert.present();
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async editcakeDetails(){
    this.avatarService.updateCake(this.cake)
    const toast = await this.toastCtrl.create({
      message: 'Successfully updated!',
      duration: 1000
    })
    toast.present();
    this.router.navigate(['sellertabs/seller-dashboard']);
    
  }

  async changeImage(cake) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImageCake(image, cake.id);
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


 
}