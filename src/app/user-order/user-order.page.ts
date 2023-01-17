import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.page.html',
  styleUrls: ['./user-order.page.scss'],
})
export class UserOrderPage implements OnInit {
  userdetails: any = [];
  orders: any = []
  uids :any 


  constructor(
    private avatarService: AvatarService,
    private auth: AuthService
  ) {

    this.uids = this.auth.uid
    console.log(this.uids)


    this.avatarService.getorders().subscribe(res=>{
      this.orders = res  
      console.log(this.orders)
    })


    this.avatarService.getUserProfile().subscribe(res => {
      this.userdetails = res;
    });

   }
  



  ngOnInit() {
  }

  addOrderList() {
    const id = {
      userdetails: this.userdetails.uid,
  }

  }
  

}
