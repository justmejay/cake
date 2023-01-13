import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.page.html',
  styleUrls: ['./redirection.page.scss'],
})
export class RedirectionPage implements OnInit {
  getaccess: any;

  constructor(private avatarService: AvatarService, private router: Router) {
    this.avatarService.getUserById().subscribe((res)=>{
      this.getaccess = res.seller;
      console.log(this.getaccess);
    })

    if (this.getaccess === 'false'){
      this.router.navigateByUrl('/usertabs', { replaceUrl: true });
      }
      else  if (this.getaccess === 'true') {
        this.router.navigateByUrl('/sellertabs', { replaceUrl: true });
      }
   }


async roleDetermine(){
 
  if (this.getaccess === 'false'){
    this.router.navigateByUrl('/usertabs', { replaceUrl: true });
    }
    else  if (this.getaccess === 'true') {
      this.router.navigateByUrl('/sellertabs', { replaceUrl: true });
    }
 
}
  ngOnInit() {

  }

}
