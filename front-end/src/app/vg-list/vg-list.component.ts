import { Component, OnInit } from "@angular/core";
import { AnyArray } from "mongoose";
import { VgService } from "../vg.service";

@Component({
  selector: "app-vg-list",
  templateUrl: "./vg-list.component.html",
  styleUrls: ["./vg-list.component.css"]
})
export class VgListComponent implements OnInit{
  
  vgs: any;

  constructor(private vgService: VgService){

  }

  ngOnInit(): void {
    this.vgs = this.vgService.get();  
  }

  onVGWishlist(vg: any){
    this.vgService.toggleWishlist(vg);
  }
}
