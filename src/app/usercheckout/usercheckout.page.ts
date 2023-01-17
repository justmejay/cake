import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-usercheckout',
  templateUrl: './usercheckout.page.html',
  styleUrls: ['./usercheckout.page.scss'],
})
export class UsercheckoutPage implements OnInit {
  cake:any = [];
  idcake: any;
  toppings: any = [];
  layers: any = [];
  sizes: any = [];
  credentials: FormGroup;
  topcreds:any = []


  constructor( private activatedRoute:ActivatedRoute, private avatarService: AvatarService, 
    private fb: FormBuilder, private router: Router

    
  ) { 
    this.activatedRoute.queryParams.subscribe((params) =>{
      this.idcake = params['cakeid'];

      this.avatarService.getCakeById(this.idcake).subscribe(res => {
        this.cake = res;
      });


    });

    this.avatarService.getToppings().subscribe(res=>{
      this.toppings = res  
    })

    this.avatarService.getLayers().subscribe(res=>{
      this.layers = res  
    })

    this.avatarService.getSizes().subscribe(res=>{
      this.sizes = res  
    })

  }

  get sToppings() {
    return this.credentials.get('sToppings');
  }

  get sLayers() {
    return this.credentials.get('sLayers');
  }

  get sSizes() {
    return this.credentials.get('sSizes');
  }

  get message() {
    return this.credentials.get('message');
  }


  ngOnInit() {

    this.credentials = this.fb.group({
      sToppings: ['', [Validators.required]],
      sLayers: ['', [Validators.required,]], 
      sSizes: ['', [Validators.required,]],
      message: ['', [Validators.required]],

    });
  
  }


  // getValue(){
  //   this.router.navigate(['userporder'], {queryParams:{selectedToppings: this.credentials.value}});
    
    async getValue() {
      let selectedTopping = this.credentials.get('sToppings').value; 
      let selectedLayer = this.credentials.get('sLayers').value;
      let selectedSize = this.credentials.get('sSizes').value;
      let selectedMessage = this.credentials.get('message').value;
      console.log('Selected Topping:', selectedTopping);
      console.log('Selected Layer:', selectedLayer);
      console.log('Selected Size:', selectedSize);
      console.log('Selected Message:', selectedMessage);
      this.router.navigate(['/userporder'], { queryParams: { topping: selectedTopping, layer: selectedLayer, size: selectedSize, message: selectedMessage, idcake: this.idcake} });
    }

    getop(top){

      var myObj = top.price
      console.log('Price', myObj)

    }
  }





//   }

// }
