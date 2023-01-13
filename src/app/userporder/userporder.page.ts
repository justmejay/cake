import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '@capacitor/camera';

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
  // cakeImage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.topping = params.topping;
      this.layer = params.layer;
      this.size = params.size;
      this.message = params.message;
      // this.cakeImage = params.cakeImage;
    });
}
}
