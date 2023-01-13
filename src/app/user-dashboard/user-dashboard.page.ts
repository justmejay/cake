import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  cakes: any = [];


  constructor(private avatarService: AvatarService, private router: Router) { 

    this.avatarService.getCakes().subscribe(res=>{
      this.cakes = res  
    })

  }


  checkout(cake){

    this.router.navigate(['usercheckout'], {queryParams:{cakeid: cake.id}});
  }

  // order(cake){
  //   this.router.navigate(['userporder'], { queryParams: { cakeImage: this.cakes.imageUrl } });
  // }

  ngOnInit() {



  }



}
