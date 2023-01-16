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
  cakeid: any;

  topdetails: any = [];
  layerdetails: any =[];
  sizedetails: any = [];
  cakedetails: any = [];
  userdetails: any = [];
  total:any = 0;
  toprice:any;
  sizeprice:any;
  layerprice:any;




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



      
      console.log(this.cakeid)


      this.avatarService.getCakeById(this.cakeid).subscribe(res => {
        this.cakedetails = res;

        this.total = this.total + parseInt(this.cakedetails.price)
  
      });

      this.avatarService.getTopById(this.topping).subscribe(res => {
        this.topdetails = res;

        this.toprice = parseInt(this.topdetails.price);
        this.total = this.total + this.toprice;
        console.log(this.total)
  
  
      });

      this.avatarService.getlayerById(this.layer).subscribe(res => {
        this.layerdetails = res;

        this.layerprice = parseInt(this.layerdetails.price);
        this.total = this.total + this.layerprice

        console.log(this.total)

  
      });

      this.avatarService.getsizeById(this.size).subscribe(res => {
        this.sizedetails = res;
        this.total = this.total + parseInt(this.sizedetails.price) + 50;
        console.log(this.total)

  
      });

      
      this.avatarService.getUserProfile().subscribe(res => {
        this.userdetails = res;
      });
      
      

    }); 

  

 
   }

  ngOnInit() {

}


addOrder() {
  const order = {
    userdetails: this.userdetails,
    cakedetails: this.cakedetails,
    topdetails: this.topdetails,
    layerdetails: this.layerdetails,
    sizedetails: this.sizedetails,
    message: this.message,
    total: this.total,
  };
  this.avatarService.addOrder(order);
  this.router.navigateByUrl('/user-order', { replaceUrl: true });
}





}
