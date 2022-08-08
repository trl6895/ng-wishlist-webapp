import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-vg",
    templateUrl: "./vg.component.html",
    styleUrls: ["./vg.component.css"]
})
export class VgComponent {
    @Input() vg: any;
    @Output() wishlist = new EventEmitter();

    onWishlist() {
        console.log("Wishlisted!");
        this.wishlist.emit(this.vg);
    }
}
