import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarService } from '../services/avatar.service';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { EditpricePage } from '../editprice/editprice.page';
import { EditpricesizePage } from '../editpricesize/editpricesize.page';
import { EditoppingsPage } from '../editoppings/editoppings.page';

@Component({
  selector: 'app-sellercms',
  templateUrl: './sellercms.page.html',
  styleUrls: ['./sellercms.page.scss'],
})
export class SellercmsPage implements OnInit {
  credentials: FormGroup;
  toppings: any = [];
  layers: any = [];
  sizes: any = [];


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
    this.avatarService.getToppings().subscribe(res=>{
      this.toppings = res  
    });

    this.avatarService.getLayers().subscribe(res=>{
      this.layers = res  
    });

    this.avatarService.getSizes().subscribe(res=>{
      this.sizes = res  
    });
   }
   async addToppings(){
    const loading = await this.loadingController.create();
    await loading.present();
  
    const toppings = await this.avatarService.addToppings(this.credentials.value)
    await loading.dismiss();
    
  }
  
  async deleteTop(toppings){
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
            this.avatarService.deleteTop(toppings.id);
            this.modalController.dismiss();
          }
        }
      ]
    })
    alert.present();
  }

 
  async editP(layer){
    const modal = await this.modalController.create({
      component: EditpricePage,
      componentProps: {id: layer.id,},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
   }

   
  async editPz(size){
    const modal = await this.modalController.create({
      component: EditpricesizePage,
      componentProps: {id: size.id,},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
   }

   async editop(top){
    const modal = await this.modalController.create({
      component: EditoppingsPage,
      componentProps: {id: top.id,},
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
   }


  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      topname: ['', [Validators.required]],
      toprice: ['', [Validators.required]],
      

    });
  }

}
