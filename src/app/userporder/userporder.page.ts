import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvatarService } from '../services/avatar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userporder',
  templateUrl: './userporder.page.html',
  styleUrls: ['./userporder.page.scss'],
})
export class UserporderPage implements OnInit {
  topping: any;
  layer: any;
  size: any;
  message: any;
  status: any;
  cakeid: any;

  topdetails: any = [];
  layerdetails: any =[];
  sizedetails: any = [];
  cakedetails: any = [];
  userdetails: any = [];
  total:number = 0;
  toprice:any;
  sizeprice:any;
  layerprice:any;
  cakeprice:any;



  // cakeImage: string;

  constructor(private route: ActivatedRoute, private avatarService: AvatarService, private router: Router) {
    
    this.route.queryParams.subscribe((params) =>{
      // this.topping = params.topping;
      // this.layer = params.layer;
      // this.size = params.size;
      // this.message = params.message;
      this.cakeid = params['idcake'];
      this.topping = params['topping'];
      this.layer = params['layer'];
      this.size = params['size'];
      this.message = params['message'];





      this.avatarService.getTopById(this.topping).subscribe(res => {
        this.topdetails = res;
    
        this.toprice = parseInt(this.topdetails.price);
    
    
      });
    
    
      this.avatarService.getlayerById(this.layer).subscribe(res => {
        this.layerdetails = res;
    
        this.layerprice = parseInt(this.layerdetails.price);
    
    
      });
      
      this.avatarService.getsizeById(this.size).subscribe(res => {
        this.sizedetails = res;
        this.sizeprice = parseInt(this.sizedetails.price);

    
    
      });
    
      this.avatarService.getUserProfile().subscribe(res => {
        this.userdetails = res;
      });
        
    
      this.avatarService.getCakeById(this.cakeid).subscribe(res => {
        this.cakedetails = res;
    
        this.cakeprice =  parseInt(this.cakedetails.price)


    
      });
      


  });
  }

  
getTotal(){
  const order = {
    userdetails: this.userdetails,
    cakedetails: this.cakedetails,
    topdetails: this.topdetails,
    layerdetails: this.layerdetails,
    sizedetails: this.sizedetails,
    message: this.message,
    total: parseInt(this.topdetails.price) + parseInt(this.cakedetails.price) + parseInt(this.layerdetails.price) + parseInt(this.sizedetails.price) + 50,
    status: "Pending",
  };
console.log(order.total)
}

  

  ngOnInit() {

    

  
}


async addOrder() {
  const order = {
    userdetails: this.userdetails,
    cakedetails: this.cakedetails,
    topdetails: this.topdetails,
    layerdetails: this.layerdetails,
    sizedetails: this.sizedetails,
    message: this.message,
    total: parseInt(this.topdetails.price) + parseInt(this.cakedetails.price) + parseInt(this.layerdetails.price) + parseInt(this.sizedetails.price) + 50,
    status: "Pending",
  };
  const get = await this.avatarService.addOrder(order);


  this.router.navigateByUrl('/usertabs/user-order', { replaceUrl: true });
}







}
