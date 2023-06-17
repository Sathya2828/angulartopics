import { Component } from '@angular/core';

@Component({
  selector: 'app-sathya',
  templateUrl: './sathya.component.html',
  styleUrls: ['./sathya.component.css']
})
export class SathyaComponent {
  pagetitle:string="Data Binding using Interpolation from sathya TS";
  imageURL:string="assets/sathyaimage/nav.jpg";
  imageURL1:string="assets/sathyaimage/sathya.jpg"
  btnStatus:boolean=false;
  username:any;
  name:any
  changeTitle(){
    this.pagetitle=" Changed Data Binding"
    
  }
  sd(){
    console.log(this.name)
  }

}
