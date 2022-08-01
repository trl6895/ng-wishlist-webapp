import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vg',
  templateUrl: './vg.component.html',
  styleUrls: ['./vg.component.css']
})
export class VgComponent{
  @Input() vg: any;
  
  wishlist(){
    console.log("Wishlisted!");
  }
}
