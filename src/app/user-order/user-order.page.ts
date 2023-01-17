import { Component, OnInit } from '@angular/core';
import { CompletedordersPage } from '../completedorders/completedorders.page';
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
  profile:any = []


  constructor(
    private avatarService: AvatarService,
    private auth: AuthService
  ) {

   


    this.avatarService.getorders().subscribe(res=>{
      this.orders = res  
    })

    this.avatarService.getUserProfile().subscribe(res=>{
      this.profile = res  
      this.profile = this.profile.uid
      console.log(this.profile)
    })


    

   }
  



  ngOnInit() {
  }

  addOrderList() {
    const id = {
      userdetails: this.userdetails.uid,
  }

  }
  

}
