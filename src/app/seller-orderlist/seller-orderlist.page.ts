import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-seller-orderlist',
  templateUrl: './seller-orderlist.page.html',
  styleUrls: ['./seller-orderlist.page.scss'],
})
export class SellerOrderlistPage implements OnInit {
  
  orders: any = []

  constructor( private avatarService: AvatarService) { 
    
    this.avatarService.getorders().subscribe(res=>{
      this.orders = res  
      console.log(this.orders)

    })

  }

  async complete(order){
    const id = order.id
    console.log(id)

  this.avatarService.getcompleted(id)

  }

  async accept(order){
    const id = order.id
    console.log(id)

  this.avatarService.getaccepted(id)

  }

  async decline(order){
    const id = order.id
    console.log(id)

  this.avatarService.getdeclined(id)

  }

  ngOnInit() {
  }

}
